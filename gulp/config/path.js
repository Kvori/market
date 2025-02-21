import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        fonts: `${buildFolder}/assets/fonts/`,
        html: `${buildFolder}`,
        sass: `${buildFolder}/styles/`,
        css: `${buildFolder}/styles/`,
        img: `${buildFolder}/img/`,
        svg: `${buildFolder}/img/`,
    },
    src: {
        fonts: `${srcFolder}/assets/fonts/**/*.ttf`,
        html: `${srcFolder}/*.html`,
        sass: `${srcFolder}/styles/**/*.scss`,
        css: `${srcFolder}/styles/**/*.css`,
        img: [
            `${srcFolder}/img/**/*.jpg`,
            `${srcFolder}/img/**/*.webp`,
            `${srcFolder}/img/**/*.png`,
            `${srcFolder}/img/**/*.jpeg`
        ],
        svg: `${srcFolder}/img/**/*.svg`,
    },
    watch: {
        fonts: `${srcFolder}/assets/fonts/**/*.ttf`,
        html: `${srcFolder}/**/*.html`,
        sass: `${srcFolder}/styles/**/*.scss`,
        css: `${srcFolder}/styles/**/*.css`,
        img: [
            `${srcFolder}/img/**/*.jpg`,
            `${srcFolder}/img/**/*.webp`,
            `${srcFolder}/img/**/*.png`,
            `${srcFolder}/img/**/*.jpeg`
        ],
        svg: `${srcFolder}/img/**/*.svg`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}