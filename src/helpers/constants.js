import { Person1, Person1Mb, Person2, Person2Mb, Person3, Person3Mb, Person4, Person4Mb, Person5, Person5Mb, Person6 } from "../assets/images";
import * as Pdf_files from "../assets/pdf/index";
import icon from "../assets/images/pdf_icon.png";

export const LINK_CONTACT_US = 'https://forms.gle/MapxURFLxcmzv7J28';
export const LINK_GITHUB = 'https://github.com/hooligain';
export const LINK_TELEGRAM = 'https://t.me/hool_community';

export const TeamMembers = [{
    name: 'Davy Nguyen',
    avatar: Person4,
    avatar_mb: Person4Mb,
    intro: ['Lead Software Engineer at Invo Solutions.','Ph.D in Applied Mathematics','M.S in Information Technology']
},{
    name: 'Ha Pham',
    avatar: Person5,
    avatar_mb: Person5Mb,
    intro: ['Product Manager at Yeah1 Corp','Co - Founder (CEO) of An Bach Entertainment','Lead Producer of Gameloft Vietnam']
},{
    name: 'Bao Mai',
    avatar: Person3,
    avatar_mb: Person3Mb,
    intro: ['M.S in Computer Science.','Senior developer at Atos France']
}]

export const AdvisorMembers = [{
    name: 'Andrew Nguyen',
    avatar: Person1,
    avatar_mb: Person1Mb,
    intro: ['Founding engineer at Kyber Network.','Head researcher at Mercurial','Author of the DMM protocol']
},{
    name: 'Trong Nguyen',
    avatar: Person2,
    avatar_mb: Person2Mb,
    intro: ['Head of Research at Kyber Network.','Ph.D. in Applied Mathematics and Machine Learning.','Master degree in Information Security']
},{
    name: 'Thi Truong',
    avatar: Person6,
    avatar_mb: Person6,
    intro: ['Former director at FPT Corp.','Ex-Product Manager at Kyber Network.','Founder of PolkaFoundry.']
}]

export const ListResources = [{
    name: "Loyalty farming protocol",
    link: Pdf_files.hool_loyalty_farming_protocol,
    icon: icon
  },{
    name: "Loyalty nft protocol",
    link: Pdf_files.hool_tokenomic,
    icon: icon
  }, {
    name: "Hool whitepaper",
    link: Pdf_files.hool_tokenomic,
    icon: icon
  }, {
    name: "Hool tokenomic",
    link: Pdf_files.hool_tokenomic,
    icon: icon
  }, {
    name: "Hool gameplay",
    link: Pdf_files.hool_gameplay,
    icon: icon
  }];