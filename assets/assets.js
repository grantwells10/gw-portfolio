import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import firebase from './firebase.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import lloyd_logo from './lloyd_logo.png';
import marathon_logo from './marathon_logo.jpeg';
import c1_logo from './c1_logo.jpg';
import tag_logo from './tag_logo.jpg';
import github_light from './github-mark.png'
import github_dark from './github-mark-white.png'
import cursor from './cursor.avif'
import colab from './colab.webp'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    firebase,
    git,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    lloyd_logo,
    marathon_logo,
    c1_logo,
    tag_logo,
    github_dark,
    github_light,
    cursor,
    colab,
    c1_logo
};

export const workData = [
    {
        title: 'ILMUNC App',
        description: 'An iOS/Android application for running Model UN conferences supporting hundreds of users with CRUD operations, authentication, push notifications, and Firebase Functions for Airtable data integration',
        url: '',
        tech: 'Flutter, Firebase',
        bgImage: '/ilmunc.png',
    },
    {
        title: 'HGit',
        description: 'A lightweight clone of Git using Haskell supporting the primary porcelain commands (init, add, commit, branch, switch, status, log)',
        url: 'https://github.com/grantwells10/haskell-git',
        tech: 'Haskell',
        bgImage: '/hgit.png',
    },
    {
        title: 'NBA Predictor',
        description: 'A machine learning project to predict NBA player point totals using Gradient Boosting Regression and Random Forest Regression with Randomized Search hyperparameter tuning',
        url: 'https://github.com/grantwells10/nba-pts-predictor',
        tech: 'Python, Google Colab, SciKit, MatPlotLib, Pandas, Numpy',
        bgImage: '/nba.png',
    },
    {
        title: 'Moral Map',
        description: 'A crowdsourcing project that maps the intricate ethical landscape of the United States, revealing how regional, demographic, and ideological factors influence moral judgments on contemporary issues',
        url: 'https://github.com/grantwells10/moral-map',
        tech: 'MongoDB, Express, React, Node, Google Colab',
        bgImage: '/moral-map.png',
    },
    {
        title: 'QuickConvert',
        description: 'A Chrome web extension to automatically convert selected prices on shopping websites to a specified target currency using React and TypeScript with the CurrencyLayer API for conversion rates',
        url: 'https://github.com/grantwells10/quick-convert',
        tech: 'React, TypeScript',
        bgImage: '/quick-convert.png',
    },
]

export const experienceData = [
    { icon: assets.c1_logo, title: 'Capital One', description: 'Software Engineering Intern, Summer 2025', link: 'https://www.capitalonecareers.com/internship-programs' },
    { icon: assets.tag_logo, title: 'TAG Infosphere', description: 'AI Intern, Summer 2024', link: 'https://tag-infosphere.com/' },
    { icon: assets.marathon_logo, title: 'Marathon Asset Management', description: 'Data Analyst Intern, Summer 2023', link: 'https://www.marathonfund.com/' },
    { icon: assets.lloyd_logo, title: 'Lloyd Group', description: 'Automation & Development Intern, Summer 2022', link: 'https://www.lloydgroup.com/' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java, Python, Haskell, HTML, CSS, ReactJS, NextJS, and Flutter' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BSE in Computer Science, Minor in Mathematics' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'FlutterFire, MERN, and ML project development experience' }
];

export const toolsData = [
    assets.cursor, assets.colab, assets.git, assets.firebase
];