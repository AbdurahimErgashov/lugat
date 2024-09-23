import React from 'react';
import { TeamContainer, MemberCard, MemberImage, MemberImageContainer, MemberInfo, MemberName, MemberDetails, SectionTitle, Cards,ContainerTeam} from './styled';
import useFetch from '../../hooks/useFetch';
function Team() {
  const { data: teamData ,loading, error } = useFetch('/scientific-team/'); 
  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }

  if (error) {
    return <p>Xatolik: {error}</p>;
  }

  return (
    <ContainerTeam>
       <TeamContainer>
      <SectionTitle>Ilmiy Jamoa</SectionTitle>
      {teamData.length > 0 ? (
        <Cards>
          {teamData.map((member, index) => (
            <MemberCard key={index}>
              <MemberImageContainer>
                <MemberImage src={member.image || 'default-image-url'} alt={member.fullname} />
              </MemberImageContainer>
              <MemberInfo>
                <MemberName>{member.fullname}</MemberName>
                <MemberDetails><strong>Ish joyi:</strong> {member.workplace || 'N/A'}</MemberDetails>
                <MemberDetails><strong>Lavozim va unvon:</strong> {member.position}</MemberDetails>
                <MemberDetails><strong>Telefon:</strong> {member.phone}</MemberDetails>
                <MemberDetails><strong>e-mail:</strong> {member.email}</MemberDetails>
                <MemberDetails><strong>Qabul kunlari:</strong> {member.admission_day}</MemberDetails>
              </MemberInfo>
            </MemberCard>
          ))}
        </Cards>
      ) : (
        <p>Ma'lumot topilmadi.</p>
      )}
    </TeamContainer>
    </ContainerTeam>
  );
  
}

export default Team;
