import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import software from '../../assets/pictures/projects/software.gif';
import art from '../../assets/pictures/projects/art.gif';
import AnimatedBuilding from '../general/AnimatedBuilding';
import type { StyleSheetCSS } from '../../types/StyleSheetCSS';

export interface ProjectsProps {}

interface ProjectBoxProps {
    icon?: string;
    iconComponent?: React.ReactNode;
    title: string;
    subtitle: string;
    route: string;
    iconStyle: React.CSSProperties;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    icon,
    iconComponent,
    title,
    subtitle,
    route,
    iconStyle,
}) => {
    const [, setIsHovering] = useState(false);
    const navigation = useNavigate();

    const handleClick = () => {
        navigation(`/projects/${route}`);
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            onMouseDown={handleClick}
            className="big-button-container"
            style={styles.projectLink}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={styles.projectLinkLeft}>
                {iconComponent ? (
                    <div style={Object.assign({}, styles.projectLinkImage, iconStyle)}>
                        {iconComponent}
                    </div>
                ) : (
                    <img
                        src={icon}
                        style={Object.assign(
                            {},
                            styles.projectLinkImage,
                            iconStyle
                        )}
                        alt=""
                    />
                )}
                <div style={styles.projectText}>
                    <h1 style={{ fontSize: 48 }}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div style={styles.projectLinkRight}></div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <h3>& Hobbies</h3>
            <br />
            <p>
                Click on one of the areas below to check out some of my favorite
                projects I've done in that field. I spent a lot of time to
                include a lot of visuals and interactive media to showcase each
                project. Enjoy!
            </p>
            <br />
            <div style={styles.projectLinksContainer}>
                <ProjectBox
                    icon={software}
                    iconStyle={styles.computerIcon}
                    title="Cyber"
                    subtitle="CERTIFICATIONS"
                    route="cyber"
                />
                <ProjectBox
                    iconComponent={<AnimatedBuilding />}
                    iconStyle={styles.buildingIcon}
                    title="Interiors"
                    subtitle="PROJECTS"
                    route="interiors"
                />
                <ProjectBox
                    icon={art}
                    iconStyle={styles.artIcon}
                    title="Art"
                    subtitle="CREATIONS"
                    route="art"
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    projectLink: {
        marginBottom: 24,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkImage: {
        width: 48,
        // height: 48,
        marginRight: 38,
    },
    projectLinkLeft: {
        marginLeft: 16,
        alignItems: 'center',
    },
    computerIcon: {
        width: 56,
        height: 56,
    },
    musicIcon: {
        width: 48,
        height: 48,
    },
    arrowIcon: {
        width: 48,
        height: 48,
    },
    artIcon: {
        width: 21 * 2,
        height: 37 * 2,
    },
    buildingIcon: {
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default Projects;
