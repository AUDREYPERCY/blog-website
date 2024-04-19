const express = require("express");
const app = express()

app.set('view engine', 'ejs')

const blogs = [
    {
        id: 1,
        author: "Daniel Smith",
        date: new Date("Feb 03 2024"),
        title: "The Rise of Artificial Intelligence",
        summary: "Artificial Intelligence (AI) is reshaping industries and transforming our world. From autonomous vehicles to advanced healthcare systems, AI is revolutionizing the way we live and work.",
        content: "Artificial Intelligence (AI) is reshaping industries and transforming our world. From autonomous vehicles to advanced healthcare systems, AI is revolutionizing the way we live and work.\n\nAs AI continues to advance, it's crucial to consider its implications across various sectors. In healthcare, AI-powered diagnostic tools are enhancing accuracy and efficiency, leading to better patient outcomes. In transportation, self-driving cars promise safer roads and reduced congestion. However, concerns about job displacement and ethical considerations loom large.\n\nDespite these challenges, the potential benefits of AI are vast. By leveraging AI technologies responsibly, we can create a future where innovation flourishes and humanity thrives.",
        image: "https://example.com/ai-image1.jpg"
    },
    {
        id: 2,
        author: "Samantha Johnson",
        date: new Date("Feb 07 2024"),
        title: "Exploring the Potential of Machine Learning",
        summary: "Machine Learning (ML) algorithms are unlocking new possibilities in areas such as predictive analytics, natural language processing, and computer vision.",
        content: "Machine Learning (ML) algorithms are unlocking new possibilities in areas such as predictive analytics, natural language processing, and computer vision. Businesses are leveraging ML to gain insights from large datasets, personalize customer experiences, and optimize operations. From recommendation systems powering online platforms to fraud detection algorithms in finance, ML is driving innovation across industries.\n\nAs ML continues to evolve, researchers and practitioners are exploring its potential applications in areas such as healthcare, finance, and environmental sustainability. However, challenges such as data bias, privacy concerns, and algorithmic transparency must be addressed to ensure responsible and ethical use of ML technologies.",
        image: "https://example.com/ml-image1.jpg"
    },
    {
        id: 3,
        author: "John Doe",
        date: new Date("Feb 12 2024"),
        title: "The Future of Robotics",
        summary: "Robotics technology is advancing rapidly, enabling automation of tasks and exploration of new frontiers.",
        content: "Robotics technology is advancing rapidly, enabling automation of tasks and exploration of new frontiers. From manufacturing and logistics to healthcare and space exploration, robots are playing increasingly important roles in various industries. Collaborative robots (cobots) are working alongside humans on factory floors, surgical robots are assisting surgeons in delicate procedures, and autonomous drones are revolutionizing agriculture.\n\nThe future of robotics holds promises of increased efficiency, enhanced safety, and improved quality of life. However, challenges such as job displacement, ethical considerations, and regulatory frameworks must be addressed to ensure responsible integration of robotics into society.",
        image: "https://example.com/robotics-image1.jpg"
    },
    {
        id: 4,
        author: "Emily Parker",
        date: new Date("Feb 17 2024"),
        title: "Ethical Considerations in AI Development",
        summary: "As AI becomes more pervasive, it's crucial to address ethical concerns regarding data privacy, bias in algorithms, and societal impact.",
        content: "As AI becomes more pervasive, it's crucial to address ethical concerns regarding data privacy, bias in algorithms, and societal impact. Developers and researchers must consider the ethical implications of AI systems, including issues of fairness, accountability, and transparency.\n\nEthical AI development involves designing algorithms that minimize bias and discrimination, ensuring transparency in decision-making processes, and respecting user privacy and consent. Stakeholders from diverse backgrounds, including ethicists, policymakers, and community representatives, should be involved in shaping AI policies and guidelines.\n\nBy prioritizing ethics in AI development, we can harness the potential of AI to benefit society while minimizing its risks and negative consequences.",
        image: "https://example.com/ai-ethics-image1.jpg"
    },
    {
        id: 5,
        author: "Michael Chen",
        date: new Date("Feb 21 2024"),
        title: "Unlocking Creativity with Generative Adversarial Networks",
        summary: "Generative Adversarial Networks (GANs) are revolutionizing creative industries by generating realistic images, music, and text.",
        content: "Generative Adversarial Networks (GANs) are revolutionizing creative industries by generating realistic images, music, and text. Artists, musicians, and writers are using GANs to explore new forms of expression and push the boundaries of creativity.\n\nGANs work by pitting two neural networks against each other: a generator network creates new content, while a discriminator network evaluates the authenticity of the generated content. Through this adversarial process, GANs learn to produce increasingly realistic outputs.\n\nApplications of GANs range from art and design to entertainment and marketing. However, challenges such as ethical use of GAN-generated content and potential misuse for misinformation and deepfakes must be addressed.",
        image: "https://example.com/gan-image1.jpg"
    },
    {
        id: 6,
        author: "Sophia Adams",
        date: new Date("Feb 25 2024"),
        title: "The Impact of AI on Job Market",
        summary: "While AI promises increased efficiency and productivity, it also raises concerns about job displacement and the need for upskilling.",
        content: "While AI promises increased efficiency and productivity, it also raises concerns about job displacement and the need for upskilling. As automation technologies advance, certain jobs may become obsolete, leading to unemployment and economic disruption.\n\nHowever, AI also creates new opportunities for employment, particularly in areas such as data science, machine learning engineering, and AI ethics. By investing in education and training programs, individuals can acquire the skills needed to thrive in the digital economy.\n\nGovernments and businesses play a crucial role in shaping the future of work by implementing policies that support workforce reskilling and lifelong learning. By embracing AI responsibly and proactively addressing its impact on the job market, we can ensure a smooth transition to the AI-powered economy.",
        image: "https://example.com/ai-job-market-image1.jpg"
    },
    {
        id: 7,
        author: "William Brown",
        date: new Date("Feb 29 2024"),
        title: "Advancements in Natural Language Processing",
        summary: "Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language.",
        content: "Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language. NLP algorithms analyze text data, extract meaningful information, and perform tasks such as sentiment analysis, language translation, and text generation.\n\nRecent advancements in NLP, fueled by deep learning techniques and large-scale language models, have led to breakthroughs in areas such as chatbots, virtual assistants, and language understanding. Companies are leveraging NLP to automate customer support, analyze user feedback, and personalize content.\n\nHowever, challenges such as language ambiguity, cultural context, and ethical use of NLP technologies remain. Researchers and practitioners are working to address these challenges and unlock the full potential of NLP for positive societal impact.",
        image: "https://example.com/nlp-image1.jpg"
    },
    {
        id: 8,
        author: "Ella Garcia",
        date: new Date("Mar 03 2024"),
        title: "The Role of AI in Healthcare",
        summary: "AI is revolutionizing healthcare by improving diagnostics, personalized treatment plans, and patient care.",
        content: "AI is revolutionizing healthcare by improving diagnostics, personalized treatment plans, and patient care. Machine learning algorithms analyze medical data to identify patterns, predict diseases, and recommend optimal treatment strategies.\n\nIn diagnostics, AI-powered imaging systems assist radiologists in detecting abnormalities and diagnosing diseases such as cancer and neurological disorders. In personalized medicine, AI algorithms analyze genetic data to tailor treatment plans to individual patients' unique genetic profiles.\n\nAI technologies also enhance patient care through applications such as remote monitoring, virtual consultations, and predictive analytics for hospital resource management.\n\nHowever, challenges such as data privacy, regulatory compliance, and algorithmic bias must be addressed to ensure ethical and responsible use of AI in healthcare.",
        image: "https://example.com/ai-healthcare-image1.jpg"
    },
    {
        id: 9,
        author: "Oliver Wang",
        date: new Date("Mar 08 2024"),
        title: "Privacy Challenges in the Age of Big Data",
        summary: "As we generate and analyze massive amounts of data, protecting privacy becomes increasingly challenging.",
        content: "As we generate and analyze massive amounts of data, protecting privacy becomes increasingly challenging. Big data analytics enable organizations to extract valuable insights from large datasets, but they also raise concerns about data privacy and security.\n\nPrivacy challenges in the age of big data include issues such as data breaches, unauthorized access to personal information, and algorithmic discrimination. As companies collect and analyze more data about individuals, there is a growing need for robust data protection measures and privacy-preserving technologies.\n\nRegulatory frameworks such as the General Data Protection Regulation (GDPR) aim to safeguard individuals' privacy rights and hold organizations accountable for data handling practices. By implementing privacy-by-design principles and adopting ethical data practices, we can address privacy challenges while harnessing the power of big data for positive societal impact.",
        image: "https://example.com/big-data-privacy-image1.jpg"
    },
    {
        id: 10,
        author: "Isabella Martinez",
        date: new Date("Mar 12 2024"),
        title: "The Promise of Quantum Computing",
        summary: "Quantum computing holds the potential to solve complex problems that are beyond the reach of classical computers.",
        content: "Quantum computing holds the potential to solve complex problems that are beyond the reach of classical computers. Unlike classical computers, which rely on binary bits to process information, quantum computers use quantum bits (qubits) that can exist in multiple states simultaneously.\n\nThis parallel processing capability enables quantum computers to perform computations much faster than classical computers, making them well-suited for tackling complex problems in areas such as cryptography, optimization, and drug discovery.\n\nDespite their promise, quantum computers face significant technical challenges, including qubit stability, error correction, and scalability. Researchers and engineers are actively working to overcome these challenges and unlock the full potential of quantum computing for solving real-world problems.",
        image: "https://example.com/quantum-computing-image1.jpg"
    }
];

app.get('/', (req, res) => {
    // res.json(blogs)
    console.log(blogs[1])

    // res.send("Blog home page")

    res.render('home', {blogs})
})

app.get('/about', (req, res) => {
    res.render("about");
})


app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    const blog = blogs.find(blog => blog.id === parseInt(id));
    if (!blog) {
        return res.status(404).send('Blog not found');
    }
    res.render('blog', { blog: blog });
});

app.listen(3000, () => console.log('Listening at localhost:3000'))