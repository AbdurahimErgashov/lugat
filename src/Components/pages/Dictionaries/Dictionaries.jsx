import React, { useState, useEffect } from "react";
import {
  Container,
  InputContainer,
  Input,
  Button,
  Result,
  Header,
  AudioButton,
  ThemeToggle,
  DictonaryContainer,
  HighlightedWord,
  SelectContainer,
  Select,
} from "./styled";
import { FaSearch } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";
import Modal from "./Modal";
import useFetch from "../../hooks/useFetch";

// Function to split text by periods
const splitTextByPeriods = (text) => {
  return text
    .split(".")
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
};

// Diakritik belgilarni olib tashlash funksiyasi
const normalizeString = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/'/g, ""); // Qidirilayotgan so'zni to'g'ri normalizatsiya qilish
};

function Dictionaries() {
  const { data, loading, error } = useFetch("/dictionary");
  const {
    data: Textdata,
    loading: textloading,
    error: texterror,
  } = useFetch("/text");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWord, setFilteredWord] = useState(null);
  const [filteredSentences, setFilteredSentences] = useState([]);
  const [voice, setVoice] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchType, setSearchType] = useState("token"); // New state for search type
  // const [filteredWord, setFilteredWord] = useState(null); // For the result section
  const [modalWord, setModalWord] = useState(null); // For the modal content

  // Handle search input changes
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredWord(null);
    setFilteredSentences([]);
    setIsResultVisible(false);
  };

  // Perform search and filter results based on search type
  const handleSearch = () => {
    if (searchTerm && data && Textdata) {
      const cleanedSearchTerm = normalizeString(
        searchTerm.replace(/'/g, "").toLowerCase()
      );

      // Search logic based on type (Token, Lemma, Concordance)
      const foundWord = data.find((word) =>
        searchType === "lemma"
          ? normalizeString(word.lexical.replace(/'/g, "").toLowerCase()) ===
            cleanedSearchTerm
          : normalizeString(
              word.lexical.replace(/'/g, "").toLowerCase()
            ).includes(cleanedSearchTerm)
      );

      if (foundWord) {
        const splitSentences = Textdata.map((item) => ({
          id: item.id,
          sentences: splitTextByPeriods(item.text),
        }));

        const sentencesWithWord = splitSentences.flatMap((item) =>
          item.sentences
            .filter((sentence) => {
              const cleanedSentence = normalizeString(
                sentence.replace(/'/g, "").toLowerCase()
              );
              if (searchType === "lemma") {
                // Exact match for Lemma search
                return cleanedSentence
                  .split(" ")
                  .some((word) => word === cleanedSearchTerm);
              }
              // Match for Token and Concordance
              return cleanedSentence.includes(cleanedSearchTerm);
            })
            .map((sentence) => ({ id: item.id, sentence }))
        );

        setFilteredWord(foundWord);
        setFilteredSentences(sentencesWithWord);
      } else {
        setFilteredWord(null);
        setFilteredSentences([]);
      }
    } else {
      setFilteredWord(null);
      setFilteredSentences([]);
    }
    setIsResultVisible(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleWordClick = async (word, event) => {
    const rect = event.target.getBoundingClientRect();
    setModalPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    });
  
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/word-root/`;
  
    console.log("Sending POST request to:", apiUrl);
    console.log("POST request body:", { word });
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ word }),
      });
  
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const wordData = await response.json();
      console.log("Response data:", wordData);
  
      // Update the modal with the returned word data
      setModalWord(wordData);
      setIsModalVisible(true); // Display the modal
      console.log(`${wordData["qo'shimcha"]}`);
    } catch (error) {
      console.error("Error fetching word data:", error);
      // const qoshimcha = 'qo\'shimcha'
      setModalWord({
        soz_ildizi: "No data available", 
        "qo'shimcha": "No additional info", 
        soz_turkumi: "No word type found"
      });
      
      setIsModalVisible(true);
    }
  };
  
  
  

  const highlightWord = (sentence, wordToHighlight) => {
    const cleanedWordToHighlight = normalizeString(
      wordToHighlight.replace(/'/g, "").toLowerCase()
    );
    const cleanedSentence = normalizeString(
      sentence.replace(/'/g, "").normalize()
    );

    // For Token and Concordance, highlight both base and plural forms
    const regex =
      searchType === "lemma"
        ? new RegExp(`\\b(${cleanedWordToHighlight})\\b`, "gi")
        : new RegExp(`(${cleanedWordToHighlight}\\S*)`, "gi");

    return cleanedSentence.split(regex).map((part, index) => {
      const cleanedPart = normalizeString(part.replace(/'/g, "").toLowerCase());
      return cleanedPart === cleanedWordToHighlight ||
        (searchType !== "lemma" &&
          cleanedPart.startsWith(cleanedWordToHighlight)) ? (
        <HighlightedWord
          key={index}
          onClick={(event) => handleWordClick(cleanedPart, event)} // Bosilganda modal ochiladi
        >
          {part}
        </HighlightedWord>
      ) : (
        part
      );
    });
  };

  // Ovozlarni yuklash funksiyasi
  useEffect(() => {
    const loadVoices = () => {
      let voices = window.speechSynthesis.getVoices();

      // Agar ovozlar hali yuklanmagan bo'lsa, yuklangandan keyin ovozlar tanlanadi
      if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
          voices = window.speechSynthesis.getVoices();
          if (voices.length > 0) {
            // Birinchi ishlaydigan ovozni tanlash
            setVoice(
              voices.find((voice) => voice.lang.startsWith("uz")) || voices[0]
            );
          }
        };
      } else {
        setVoice(
          voices.find((voice) => voice.lang.startsWith("uz")) || voices[0]
        );
      }
    };

    loadVoices();
  }, []);

  const handleSpeak = () => {
    if (filteredWord && filteredWord.lexical && voice) {
      const utterance = new SpeechSynthesisUtterance(filteredWord.lexical);
      utterance.voice = voice;
      utterance.pitch = 1;
      utterance.rate = 1;
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("No voice or word found to speak.");
    }
  };

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  if (loading || textloading) return <p>Loading...</p>;
  if (error || texterror) return <p>Error: {error || texterror}</p>;

  return (
    <DictonaryContainer>
      <Container darkMode={darkMode}>
        <Header>KORPUS LUG'ATI</Header>
        <ThemeToggle onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>

        {/* Add Search Type Selector */}
        <SelectContainer darkMode={darkMode}>
          <label htmlFor="searchType">Search By:</label>
          <Select
            id="searchType"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            darkMode={darkMode}
          >
            <option value="token">Token</option>
            <option value="lemma">Lemma</option>
            <option value="concordance">Concordance</option>
          </Select>
        </SelectContainer>

        <InputContainer>
          <Input
            type="text"
            placeholder="Search the Word"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            darkMode={darkMode}
          />
          <Button onClick={handleSearch} darkMode={darkMode}>
            <FaSearch />
          </Button>
        </InputContainer>

        <Result darkMode={darkMode} isVisible={isResultVisible}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                border: "1px solid black",
                borderRadius: "24px",
                padding: "0 25px",
                marginRight: "5px",
              }}
            >
              <h3>SO'Z</h3>
              <p>
                <strong>Grammatik tavsif:</strong>{" "}
                {filteredWord?.grammatical || "Lug'atda Mavjud Emas"}
              </p>
              <p>
                <strong>Lug’aviy shakl:</strong>{" "}
                {filteredWord?.lexical || "Lug'atda Mavjud Emas"}
              </p>
              <p>
                <strong>Izoh:</strong>{" "}
                {filteredWord?.comment || "Lug'atda Mavjud Emas"}
              </p>
              <AudioButton onClick={handleSpeak} darkMode={darkMode}>
                <BsFillPlayFill />
              </AudioButton>
            </div>
            <div
              style={{
                width: "50%",
                border: "1px solid black",
                borderRadius: "24px",
                padding: "0 25px",
              }}
            >
              <h3>Gaplar</h3>
              {filteredSentences.length > 0 ? (
                filteredSentences.map((item, index) => (
                  <p key={index}>{highlightWord(item.sentence, searchTerm)}</p>
                ))
              ) : (
                <p>Gaplar topilmadi</p>
              )}
            </div>
          </div>
        </Result>
        <Modal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          position={modalPosition}
          content={modalWord || { grammatical: "None", lexical: "None" }} // Updated content from modalWord
        />

      </Container>
    </DictonaryContainer>
  );
}

export default Dictionaries;
