import { Badge } from "@/components/Badge";
import { GraduationCap } from "lucide-react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./education.module.scss";

type Credential = {
    institutionTag: string;
    institutionName: string;
    program: string;
    subtext: string;
    skills: string[];
};

const credentials: Credential[] = [
    {
        institutionTag: "IIM-A",
        institutionName: "IIM Ahmedabad",
        program: "Executive Program in IT Management & Strategic Business Leadership",
        subtext: "Future CIO/CTO Program",
        skills: [
            "IT Governance",
            "Strategic Leadership",
            "Business Strategy",
            "CXO Readiness",
        ],
    },
    {
        institutionTag: "IIT-R",
        institutionName: "IIT Roorkee",
        program: "Executive Program — Cloud Computing & DevOps",
        subtext: "Specialization Certificate",
        skills: ["Cloud Architecture", "DevOps Engineering", "Infrastructure Automation"],
    },
    {
        institutionTag: "VNSGU",
        institutionName: "Veer Narmad South Gujarat University",
        program:
            "Master of Science (MSc) & Bachelor of Science (BSc) in Information Technology",
        subtext: "MSc - BSc in IT",
        skills: ["Information Technology", "Software Engineering", "Systems Architecture"],
    },
];

function CredentialCard({ credential }: { credential: Credential }) {
    const { institutionTag, institutionName, program, subtext, skills } = credential;

    return (
        <article className={styles.card}>
            <div className={styles.iconBox} aria-hidden>
                <GraduationCap size={22} strokeWidth={1.75} />
            </div>
            <span className={styles.institutionTag}>{institutionTag}</span>
            <h3 className={styles.cardTitle}>{institutionName}</h3>
            <p className={styles.program}>{program}</p>
            <p className={styles.subtext}>{subtext}</p>
            <ul className={styles.skillList} role="list">
                {skills.map((skill) => (
                    <li key={skill}>
                        <span className={styles.skillTag}>{skill}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export function Education() {
    return (
        <section className={styles.education} aria-labelledby="education-heading">
            <Container className={styles.inner}>
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} xl={8}>
                        <header className={styles.header}>
                            <Badge items={["Education"]} />
                            <h2 id="education-heading" className={styles.heading}>
                                Academic &{" "}
                                <span className={styles.headingAccent}>
                                    Executive Credentials
                                </span>
                            </h2>
                        </header>
                    </Col>
                </Row>

                <div className={styles.grid}>
                    {credentials.map((credential) => (
                        <CredentialCard
                            key={credential.institutionTag}
                            credential={credential}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
