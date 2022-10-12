import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        {props.sections.map((section) => {
          return (
            <div>
              <h2>{section["title"]}</h2>
              {section["experiences"].map((experience) => (
                <ExperienceCard experience={experience} theme={theme} />
              ))}
            </div>
          );
        })}
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
