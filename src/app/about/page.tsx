"use client"
// import React from 'react';
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Tooltip,
// } from "@material-tailwind/react";
// const Header: React.FC = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//     <Card className="w-full max-w-[50rem] flex-row">
//       <CardHeader
//         shadow={false}
//         floated={false}
//         className="m-0 w-3/5 shrink-0 rounded-r-none"
//       >
//         <img
//           src="/images/aboutus.jpeg"
//           alt="card-image"
//           className="h-full w-full object-cover"
//         />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h6" color="gray" className="mb-4 uppercase">
//           Our Moment
//         </Typography>
//         <Typography color="gray" className="mb-8 font-normal">
//         In the intricate tapestry of legal innovation, our team of six dedicated individuals stands united, each weaving their unique thread into the creation of something extraordinary — the LegalChain eVault. Our journey began with a shared vision: to revolutionize legal record-keeping through the power of blockchain. 
//         </Typography>
//       </CardBody>
//     </Card>
//   </div>







// );
  
// };

// export default Header;


import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-[50rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-3/5 shrink-0 rounded-r-none"
        >
          <img
            src="/images/aboutus.jpeg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Our Moment
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            In the intricate tapestry of legal innovation, our team of six dedicated individuals stands united, each weaving their unique thread into the creation of something extraordinary — the LegalChain eVault. Our journey began with a shared vision: to revolutionize legal record-keeping through the power of blockchain.
          </Typography>
        </CardBody>
      </Card>

      {/* Team Members Section */}
      <div className="flex justify-center mt-8 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="w-48">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 h-32"
            >
              <img
                src={member.photo}
                alt={`team-member-${index}`}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="gray" className="mb-2 uppercase">
                {member.name}
              </Typography>
              <Typography color="gray" className="mb-4">
                {member.role}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-4 pt-2">
              <Tooltip content="Like">
                <Typography as="a" href={member.socialLinks.facebook} variant="lead" color="blue">
                  <i className="fab fa-facebook" />
                </Typography>
              </Tooltip>
              <Tooltip content="Follow">
                <Typography as="a" href={member.socialLinks.twitter} variant="lead" color="light-blue">
                  <i className="fab fa-twitter" />
                </Typography>
              </Tooltip>
              <Tooltip content="Follow">
                <Typography as="a" href={member.socialLinks.instagram} variant="lead" color="purple">
                  <i className="fab fa-instagram" />
                </Typography>
              </Tooltip>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Header;

// Replace this with actual data for your team members
const teamMembers = [
  {
    name: 'Team Member 1',
    role: 'Blockchain Architect',
    photo: '/images/team_member1.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  // Repeat the structure for the remaining team members
];
