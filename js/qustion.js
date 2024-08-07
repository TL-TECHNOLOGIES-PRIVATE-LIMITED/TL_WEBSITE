// question and answer for the chat bot

const questions = [
    {
        question: "What services does TL TECHNOLOGIES offer?",
        answer: "TL TECHNOLOGIES offers a comprehensive range of digital services including Digital Marketing, Domain & Hosting, Branding, Website Development, E-commerce Solutions, Video Editing, Posters/Flex Printing, Custom Software Development, Mobile App Development, Cybersecurity Services, Data Analytics, Cloud Solutions, System Integration, IT Support, SEO/SEM, and IT Consulting. Feel free to ask for more details on any specific service!"
    },
    {
        question: "What products does TL TECHNOLOGIES offer?",
        answer: "TL TECHNOLOGIES offers innovative products such as: Appointment Management System: Streamlines appointment scheduling and management for businesses. TL Being Digital: A digital transformation suite to enhance business operations. Everyhome Application: A smart home management app for seamless control of home devices. Server Monitoring System: Ensures optimal server performance with real-time monitoring and alerts. And many more! Feel free to ask for more details about any specific product."
    },
    {
        question: "How can I contact TL TECHNOLOGIES?",
        answer: "You can reach us at +91 9061432814. We take clients from all over the world and are always here to help with your digital needs."
    },
    {
        question: "Can you tell me more about your Digital Marketing services?",
        answer: "Our Digital Marketing services include SEO, SEM, social media marketing, content marketing, email marketing, and more. We tailor our strategies to meet your specific business goals and help you achieve a strong online presence."
    },
    {
        question: "What does your Website Development service entail?",
        answer: "Our Website Development service includes designing and building responsive, user-friendly websites tailored to your business needs. We handle everything from front-end design to back-end development, ensuring a seamless user experience."
    },
    {
        question: "How can your E-commerce Solutions benefit my business?",
        answer: "Our E-commerce Solutions include building robust online stores, integrating secure payment gateways, and optimizing the shopping experience to increase sales and customer satisfaction. We aim to provide a smooth and effective e-commerce platform for your business."
    },
    {
        question: "What types of Mobile App Development do you offer?",
        answer: "We develop intuitive and user-friendly mobile applications for both iOS and Android platforms. Our services include app design, development, testing, and maintenance. We specialize in various technologies including Flutter, which allows for cross-platform development to create high-performance apps that work seamlessly on both iOS and Android. We ensure your app meets the highest standards of performance and usability."
    },
    {
        question: "How can your Cybersecurity Services protect my business?",
        answer: "Our Cybersecurity Services include risk assessments, vulnerability management, network security, data protection, and incident response. We help safeguard your business from cyber threats and ensure the integrity of your data."
    },
    {
        question: "What kind of IT Support do you provide?",
        answer: "Our IT Support services include technical assistance, troubleshooting, network management, and maintenance. We provide both remote and on-site support to ensure your IT infrastructure runs smoothly and efficiently."
    },
    {
        question: "Can you customize software to fit my business needs?",
        answer: "Absolutely! Our Custom Software Development service is designed to create software solutions tailored to your specific business requirements. We work closely with you to understand your needs and deliver a solution that meets your goals."
    },
    {
        question: "What are the benefits of your Cloud Solutions?",
        answer: "Our Cloud Solutions offer scalable, flexible, and secure cloud computing services. We help you migrate to the cloud, manage your cloud infrastructure, and optimize your cloud resources to improve efficiency and reduce costs."
    },
    {
        question: "How does your Appointment Management System work?",
        answer: "Our Appointment Management System streamlines the process of scheduling and managing appointments. It offers features such as automated reminders, calendar integrations, and easy rescheduling options to enhance efficiency and customer satisfaction."
    },
    {
        question: "What is TL Being Digital?",
        answer: "TL Being Digital is our digital transformation suite designed to enhance business operations. It includes tools for process automation, data analytics, and digital collaboration to help businesses stay competitive in the digital age."
    },
    {
        question: "Can you tell me more about the Everyhome Application?",
        answer: "The Everyhome Application is a smart home management app that allows you to control and monitor your home devices seamlessly. It supports various smart devices and offers features like remote access, automation, and real-time notifications."
    },
    {
        question: "What does the Server Monitoring System offer?",
        answer: "Our Server Monitoring System provides real-time monitoring of your server's performance. It includes features such as performance metrics, alert notifications, and detailed reports to ensure your servers are running optimally and to prevent potential issues."
    },
    {
        question: "How can your Branding services help my business?",
        answer: "Our Branding services include creating a strong brand identity, designing logos, developing brand guidelines, and crafting compelling brand stories. We help you build a memorable and impactful brand that resonates with your target audience."
    },
    {
        question: "What does your Video Editing service include?",
        answer: "Our Video Editing service includes professional editing of promotional videos, commercials, corporate videos, and more. We enhance your video content to make it engaging and impactful, helping you effectively communicate your message."
    },
    {
        question: "Can you help with SEO and SEM?",
        answer: "Yes, we offer comprehensive SEO and SEM services to improve your website's visibility and search engine ranking. Our strategies include keyword research, on-page optimization, link building, and pay-per-click advertising to drive traffic and increase conversions."
    }
];


const keywords = [
    "services",
    "products",
    "contact",
    "Digital Marketing",
    "Website Development",
    "E-commerce",
    "Mobile App Development",
    "Cybersecurity",    
    "IT Support",
    "Custom Software",
    "Cloud Solutions",
    "Appointment Management",
    "TL Being Digital",
    "Everyhome",
    "Server Monitoring System",
    "Branding",
    "Video Editing",
    "SEO",
    
];