import React, { useEffect, useState } from "react";
import axios from "axios";

import photo from "../../assets/photo.jpg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import linkedIn from "../../assets/linkedin.svg";
import link from "../../assets/link.svg";
import code1 from "../../assets/code-1.png";
import code2 from "../../assets/code-2.png";

import projects from "../../data.json";
import {
  Container,
  AdsContainer,
  ProfileContainer,
  ProfileInfo,
  ProjectsContainer,
  ProjectItem,
  TechnologyContainer,
} from "./styles";

export default function Home() {
  const [gif, setGif] = useState(null);

  const data = {
    profile: {
      name: "Matheus Menezes Manfrin",
      photo,
    },
    socialMedias: [
      {
        name: "github",
        url: "https://github.com/manfrinmm",
        slug: "github.com/manfrinmm",
        icon: github,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/manfrinmm",
        slug: "linkedin.com/in/manfrinmm",
        icon: linkedIn,
      },
      {
        name: "Instagram",
        url: "https://instagram.com/manfrinmm",
        slug: "instagram.com/manfrinmm",
        icon: instagram,
      },
    ],
    technologies: [
      "JavaScript",
      "Typescript",
      "NodeJs",
      "ReactJs",
      "Git",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "GCP",
      "AWS",
    ],
    projects,
  };

  const api_key = "6STszV0RpYwd7ynrI66O5idh8nDyW3hs",
    tag = "javascript",
    rating = "G";

  useEffect(() => {
    async function loadGif() {
      const { data } = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}&rating=${rating}`,
      );

      console.log(data.data.images.original.url);
      console.log(data.data.image_original_url);
      setGif(data.data.images.original.url);
    }

    loadGif();
  }, []);

  return (
    <Container>
      <AdsContainer gif={code1} />

      <ProfileContainer>
        <img src={data.profile.photo} alt={data.profile.name} />

        <ProfileInfo>
          <h2>{data.profile.name}</h2>
          <p>FullStack Developer JavaScript</p>

          <ul>
            {data.socialMedias.map((socialMedia) => (
              <li key={socialMedia.name}>
                <a
                  href={socialMedia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socialMedia.icon} alt={socialMedia.name} />
                  <p>{socialMedia.slug}</p>
                </a>
              </li>
            ))}
          </ul>
        </ProfileInfo>
      </ProfileContainer>

      <TechnologyContainer>
        <ul>
          {data.technologies.map((technology) => (
            <li key={technology}>
              <p>{technology}</p>
            </li>
          ))}
        </ul>
      </TechnologyContainer>

      <ProjectsContainer>
        <ul>
          {projects.map((project) => (
            <ProjectItem key={project.name}>
              <strong>{project.name}</strong>
              <p>{project.description}</p>

              <div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Matheus Menezes Manfrin" />
                  <span>Acessar projeto no github</span>
                </a>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={link} alt="Matheus Menezes Manfrin" />
                    <span>Acessar site do projeto</span>
                  </a>
                )}
              </div>
            </ProjectItem>
          ))}
        </ul>
      </ProjectsContainer>

      <AdsContainer gif={code2} style={{ marginTop: "16px" }} />
    </Container>
  );
}
