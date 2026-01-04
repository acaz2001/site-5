import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  pixelBasedPreset,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import Image from 'next/image';


const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const VercelInviteUserEmail = ({
  ime,
  proizvodi,
  cena,
  nacinIsporuke,
  nacinPlacanja
  
}) => {
  //const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-auto bg-white px-5 rounded-2xl font-sans">
          
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
            <Section className="mt-[32px]">
              {/*<Img
                src={'https://i.postimg.cc/KvfCyxPH/VERDE-LOGO-1.png'}
                width="40"
                height="37"
                alt="logo verde"
                className="mx-auto my-0"
              />*/}
            </Section>
            <Heading className="mx-0 mb-[50px] mt-3 p-0 text-center font-normal text-[24px] text-black">
              Staklorezac <strong className='text-green-500'>Verde</strong>
              
            </Heading>
            <Text className="text-[24px] font-medium text-black leading-[24px]">
              Potvrda porudžbine
            </Text>
            <Text className="text-[24px] font-medium text-black leading-[24px]">
              Ćao {ime}
            </Text>
            <Text className="text-[18px] text-black leading-[24px]">
              Kupljeni proizvodi:
            </Text>
            {proizvodi.map((p, i) => (
              <Section className="text-[18px] text-black leading-[24px]" key={`${p.naziv}-${p.dimenzija}-${i}`}>
                 –  –  –  –  –  –  –  –  –  –  – 
                <Text className="text-[18px] text-black leading-[24px]">
                  Ime Proizvoda: {p.naziv}
                </Text>
                <Text className="text-[18px] text-black leading-[24px]">
                  Varijanta: {p.varijanta}
                </Text>
                <Text className="text-[18px] text-black leading-[24px]">
                  Dimenzija: {p.dimenzija}
                </Text>
                <Text className="text-[18px] text-black leading-[24px]">
                  Količina: {p.kolicina}
                </Text>
                <Text className="text-[18px] text-black leading-[24px]">
                  Cena: {p.cena}
                </Text>
              </Section>
            ))}
            
            <Text className="text-[18px] mt-5 text-black leading-[24px]">
              Ukupno za naplatu {cena},
            </Text>
            <Text className="text-[18px] text-black leading-[24px]">
              Način isporuke: {nacinIsporuke}
            </Text>
            <Text className="text-[18px] text-black leading-[24px]">
              Način plaćanja: {nacinPlacanja}
            </Text>
            <Text className="text-[14px] text-black leading-[24px]">
               Kontaktiraćemo vas u najkraćem roku.
              
            </Text>
            <Section>
              <Row>
                <Column align="right">
                   {/*Image */}
                </Column>
                <Column align="center">
                  {/*Image */}
                </Column>
                <Column align="left">
                  {/*<Img
                    className="rounded-full"
                    src={teamImage}
                    width="64"
                    height="64"
                    alt={`${teamName} team logo`}
                  />*/}
                </Column>
              </Row>
            </Section>
            <Section className="mt-[32px] mb-[32px] text-center">
              
            </Section>
            <Text className="text-[14px] text-black leading-[24px]">
              verdestaklorezac.com
              
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

VercelInviteUserEmail.PreviewProps = {
  username: 'alanturing',
  userImage: `${baseUrl}/static/vercel-user.png`,
  invitedByUsername: 'Alan',
  invitedByEmail: 'alan.turing@example.com',
  teamName: 'Enigma',
  teamImage: `${baseUrl}/static/vercel-team.png`,
  inviteLink: 'https://vercel.com',
  inviteFromIp: '204.13.186.218',
  inviteFromLocation: 'São Paulo, Brazil',
} 

export default VercelInviteUserEmail;
