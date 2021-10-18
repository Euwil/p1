import envelope from "../assets/svg/envelope.svg";
import phone from "../assets/svg/phone.svg";
import antenna from "../assets/svg/antenna.svg";
import clock from "../assets/svg/clock.svg";
import computer from "../assets/svg/computer.svg";
import astronaut from "../assets/svg/astronaut.svg";
import firstService from "../assets/services/s1.jpg";
import secondService from "../assets/services/s2.jpg";
import thirdService from "../assets/services/s3.jpg";
import firstMember from "../assets/team/member1.jpg";
import secondMember from "../assets/team/member2.jpg";
import thirdMember from "../assets/team/member3.jpg";
import forthMember from "../assets/team/member4.jpg";
import instagram from "../assets/socials/instagram.svg";
import twitter from "../assets/socials/twitter.svg";
import facebook from "../assets/socials/facebook.svg";
import linkedIn from "../assets/socials/linkedin.svg";
import firstPartner from "../assets/svg/partner1.svg";
import secondPartner from "../assets/svg/partner2.svg";
import thirdPartner from "../assets/svg/partner3.svg";
import forthPartner from "../assets/svg/partner4.svg";
import fifthPartner from "../assets/svg/partner5.svg";
import sixthPartner from "../assets/svg/partner6.svg";

export const navigationLinks = ["Студия", "Портфолио", "Контакты"];
export const contactLinks = [
  {
    href: "mailto:info@devstudio.com",
    text: "info@devstudio.com",
    svg: envelope,
  },
  {
    href: "tel:+380961111111",
    text: "+38 096 111 11 11",
    svg: phone,
  },
];
export const aboutUs = [
  {
    svg: antenna,
    title: "Внимание к деталям",
    text: "Идейные соображения, а также начало повседневной работы по формированию позиции.",
  },
  {
    svg: clock,
    title: "Пунктуальность",
    text: "Задача организации, в особенности же рамки и место обучения кадров влечет за собой.",
  },
  {
    svg: computer,
    title: "Планирование",
    text: "Равным образом консультация с широким активом в значительной степени обуславливает.",
  },
  {
    svg: astronaut,
    title: "Современные технологии",
    text: "Значимость этих проблем настолько очевидна, что реализация плановых заданий.",
  },
];

export const ourServices = [
  { img: firstService, title: "Десктопные приложения" },
  { img: secondService, title: "Мобильные приложения" },
  { img: thirdService, title: "Дизайнерские решения" },
];

export const teamMembers = [
  { img: firstMember, name: "Игорь Демьяненко", position: "Product Designer" },
  { img: secondMember, name: "Ольга Репина", position: "Frontend Developer" },
  { img: thirdMember, name: "Николай Тарасов", position: "Marketing" },
  { img: forthMember, name: "Михаил Ермаков", position: "UI Designer" },
];
export const socialsList = [instagram, twitter, facebook, linkedIn];

export const partnersList = [
  firstPartner,
  secondPartner,
  thirdPartner,
  forthPartner,
  fifthPartner,
  sixthPartner,
];
