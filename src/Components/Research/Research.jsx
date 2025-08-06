import React from 'react';
import styles from './Research.module.css';
import r1 from '../../assets/r1.jpg';
import r2 from '../../assets/r2.jpg';
import r3 from '../../assets/r3.jpeg';
import r4 from '../../assets/r4.jpg';
import r5 from '../../assets/r5.jpg';
import r6 from '../../assets/r6.jpg';


const researchData = [
    {
        title: "Artificial Intelligence",
        description:
            "Projects exploring machine learning models, natural language processing, computer vision, and ethical AI under the Univision AI Lab.",
        image: r1,
        alt: "AI Research",
    },
    {
        title: "Blockchain Applications",
        description:
            "Focused on secure, transparent, and decentralized applications, including loyalty systems and academic certificate management.",
        image: r2,
        alt: "Blockchain Applications",
    },
    {
        title: "Brain-Computer Interfaces",
        description: "Exploring real-time interaction between the brain and devices.",
        image: r3,
        alt: "Brain-Computer Interfaces",
    },
    {
        title: "Smart Agriculture",
        description: "IoT-based systems to optimize crop monitoring and yield.",
        image: r4,
        alt: "Smart Agriculture",
    },
     {
        title: "Quantum Machine Learning",
    description: "Hybrid quantum-classical algorithms for advanced computation.",
        image: r5,
        alt: "Quantum Machine Learning",
    },
     {
        title: "Cybersecurity in IoT",
    description: "Frameworks for securing connected smart devices.",
        image: r6,
        alt: "Cybersecurity",
    }
];

export default function Research() {
    return (
        <section className={styles.researchSection} id="research">
            <h2 className={styles.heading}>Ongoing Research at Univision</h2>
            <div className={styles.cardGrid}>
                {researchData.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <img src={project.image} alt={project.title} className={styles.image} />
                        <h3 className={styles.title}>{project.title}</h3>
                        <p className={styles.description}>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
