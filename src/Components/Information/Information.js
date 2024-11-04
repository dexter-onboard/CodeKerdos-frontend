import React from 'react';
import './style.css'; // Make sure to import your CSS styles

const timelineData = [
    {
        text: 'Understanding code is vital in development. Learning logic enables effective feature building and troubleshooting, fostering confidence in creation and innovation.',
        date: 'Why Learning Code Logic Matters',
        category: {
            tag: 'CodeKerdos',
            color: '#FFDB14'
        },
        
    },
    {
        text: `Our platform ensures you never say: It worked last night! Instead, you'll confidently declare:  know exactly what my code does!`,
        date: 'Say Goodbye to Guesswork',
        category: {
            tag: 'CodeKerdos',
            color: '#e17b77'
        },
        
    },
    {
        text: `At our platform, we recognize that learning to code can be challenging. That's why we provide 12/6 support from experienced mentors dedicated to your success, ready to assist you anytime you need help.`,
        date: '12/6 Support and Mentorship.',
        category: {
            tag: 'CodeKerdos',
            color: '#1DA1F2'
        },       
    },
    {
        text: `Our platform offers a personalized learning experience tailored to your unique needs. Through comprehensive assessments, we help you identify your skills and interests, allowing us to create custom learning plans that align with your goals. You’ll engage with dynamic content that resonates with you, ensuring that your learning is both effective and enjoyable. With a strong foundation in place, you'll be well-equipped on your path to success in coding.`,
        date: 'Crafting Your Unique Learning Journey',
        category: {
            tag: 'CodeKerdos',
            color: '#018f69'
        },        
    },
    {
        text: `Experience interactive live sessions designed for a hands-on learning approach. Engage with industry experts who bring real-world experience to the classroom, allowing you to learn from the best. Participate in dynamic discussions and get your questions answered promptly during Q&A sessions, fostering a collaborative environment. This interactive learning experience enhances your understanding and builds your confidence as you navigate your coding journey.`,
        date: 'Interactive Live Sessions',
        category: {
            tag: 'CodeKerdos',
            color: '#FFDB14'
        },        
    },
    {
      text: `Engage in real-world projects that bridge the gap between theory and practice. Our program focuses on industry-relevant applications, allowing you to tackle challenges that enhance your problem-solving abilities. Strengthen your portfolio with hands-on experience, preparing you for the demands of the tech industry. This practical approach gives you a competitive edge, enabling a smooth transition from learning to real-world application, and equips you with the skills needed to succeed in your career.`,
      date: 'Real-World Projects',
      category: {
          tag: 'CodeKerdos',
          color: '#e17b77'
      },        
  }
];

// TimelineItem component
const TimelineItem = ({ data }) => (
    <div className="timeline-item">
      
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

// Timeline component
const Timeline = () => (
  <>
  <div className='bg-[#10172A]'>
  <h1 className='text-[5rem] text-[#3A80F6]'>We Are Dedicated to Elevating Your Code Understanding</h1>
    <div className="timeline-container">
     
        {timelineData.length > 0 ? (
            timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))
        ) : (
            <p>No timeline data available.</p>
        )}
    </div>
    </div>
    </>
);

// Export the Timeline component
export default Timeline;
