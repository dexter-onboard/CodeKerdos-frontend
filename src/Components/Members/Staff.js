import YogeshImg from "../images/yogesh_sharma.jpg";
import HiteshImg from "../images/Hitesh-Sharma.jpg";
import ShivanshImg from "../images/Shivansh-Jaitly.jpeg";
import SudhendraImg from "../images/Sudhendra-singh.jpg";
import SahilImg from "../images/Shail-Chabra.jpeg";
import RiyaImg from "../images/Riya.jpg";
import HarshitImg from "../images/Harshit-Gupta.jpg";
import GarimaImg from "../images/garima.jpeg";
import "./staff.css";
// import teamBg from "../images/30.jpg";
import Heading from "./Heading";


const people = [
    {
        name: 'Yogesh Sharma',
        role: 'Founder / CEO',
        imageUrl: YogeshImg,
        interests: ['Frontend,', ' Backend,', ' ReactJS,', ' MERN'], // Example interests
    },
    // {
    //     name: 'Shubham Dutta',
    //     role: 'Co-founder / Business Head',
    //     imageUrl: 'https://mosaicprojects.wordpress.com/wp-content/uploads/2013/11/teambuilding.jpg',       
    //     interests: ['Business Development', 'Strategic Planning'],
    // },   
    {
        name: 'Shivansh Jaitly',
        role: 'SDE-1',
        imageUrl: ShivanshImg,
        interests: ['FrontEnd,', ' Java,', ' DSA,', ' SpringBoot'],
    },
   
    {
        name: 'Sudhendra Singh',
        role: 'SDE-2',
        imageUrl: SudhendraImg,
        interests: ['MERN,', ' AWS,', ' SQL,', ' devops'],
    },
    {
        name: 'Hitesh Sharma',
        role: 'Lead BlockChain Developer',
        imageUrl: HiteshImg,
        interests: ['BlockChain,', ' Backend,', ' SQL,', ',Shell Scripting'],
    },
    {
        name: 'Sahil Chabra',
        role: 'SDE-1',
        imageUrl: SahilImg,
        interests: ['Java,', ' DSA,', ' MERN,', ' AWS,', ' Cloudinary'],
    },
    {
        name: 'Riya Agarwal',
        role: 'SDE-2',
        imageUrl: RiyaImg,
        interests: ['FrontEnd,', ' ReactJS,', ' Open-Source'],
    },
    {
        name: 'Garima',
        role: 'Software Engineer',
        imageUrl: GarimaImg,
        interests: ['Frontend,', ' Backend,', ' ReactJS'],
    },
    
    {
        name: 'Harshit Gupta',
        role: 'Data Engineer',
        imageUrl: HarshitImg,
        interests: ['Data Science,', ' Java,', ' SQL,', ' Tableau,', ' Python'],
    },
    
    // More people...
]

export default function Staff() {
    return (
        <>
            <div>
                <Heading />
                <div className="vision-main-container">
                    <h1>Empowering Learners through Transformative Skills</h1>
                    <div class="vision-card">
                        <img src={YogeshImg} alt="Card Image" />
                        <div class="vision-card-content">
                            <p>Hey there, I'm Yogesh Sharma, Founder of <span className="text-[#3A80F6]">Code Kerdos</span>, extensive experience in software engineering.<br /> My vision is to create a learning environment where students not only learn to code but deeply understand the reasoning behind every line.
                                At Code Kerdos, we provide inclusive, accessible coding education designed to prepare students for successful tech careers. Our courses cover frontend and backend development, full-stack, Java, and DSA. Delivered through <span className="text-[#3A80F6]">live webinars in Hindi and English</span>, our content is accessible to all. We offer <span className="text-[#3A80F6]">12x6 mentorship and personalized support</span>, ensuring continuous guidance.
                                We also focus on professional readiness with unlimited <span className="text-[#3A80F6]">mock interviews</span>, <span className="text-[#3A80F6]">resume reviews</span>, and an <span className="text-[#3A80F6]">internship placement program</span> that gives students practical, industry-relevant experience.
                                Our commitment to transparency and tailored learning allows students to progress at their own pace. As we say, "<span className="text-[#3A80F6]">From Zero to Code Hero</span>," our goal is to help each learner reach their full potential. Join Code Kerdos and turn your coding dreams into reality.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <h2
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontWeight: 'bold',
                        }}
                        className="mt-5 text-[4rem]  text-center"
                    >
                        A group <span className="text-[#3B81F6]">committed</span> to bringing out the best in every individual.
                    </h2>

                    <ul role="list" className="grid grid-cols-1 ml-[7rem] sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-5">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="card" style={{width: '18rem'}}>
                                    <img className="card-img-top" src={person.imageUrl} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 style={{ fontWeight: 'bold', }} className="card-title text-[#3A80F6]">{person.name}</h5>
                                        <p>{person.role}</p>
                                        <p className="card-text">Teaches: {person.interests.map((interest, index) => (
                                            <span  className="interests_item text-[blue-800]" key={index}>{interest}</span>
                                        ))}</p>
                                        {/* <a href="#" className=""></a> */}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    );
}
