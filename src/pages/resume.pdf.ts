// import jsdom from "jsdom";
import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";
import SVGtoPDF from "svg-to-pdfkit";
import { githubLink, linkedInLink } from "../data";

const phoneIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
    <path fill="currentColor"
        d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8 8 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208" />
  </svg>
`;
const mailIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
    <path fill="currentColor"
        d="M28.516 7.167H3.482L16 14.275zM16.74 17.303a1.494 1.494 0 0 1-1.48 0L2.5 10.06v14.773h27V10.06z" />
  </svg>
`;
const mapPinIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
    <path fill="currentColor"
        d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118" />
  </svg>
`;
const githubIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1.03em" height="1em" viewBox="0 0 256 250">
    <path fill="#161614"
        d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403" />
  </svg>
`;
const linkedInIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#0a66c2" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"/></svg>
`;
const arrowSquareOutIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8"/></svg>
`;

export const GET: APIRoute = async ({}) => {
  const __dirname = import.meta.dirname;
  const pathProject = path.join(__dirname, "../../");

  const font = path.join(
    pathProject,
    "/public/fonts/JetBrains/JetBrainsMonoNL-Regular.ttf"
  );
  const fontB = path.join(
    pathProject,
    "/public/fonts/JetBrains/JetBrainsMono-Bold.ttf"
  );
  const fontI = path.join(
    pathProject,
    "/public/fonts/JetBrains/JetBrainsMono-Italic.ttf"
  );
  const fontBI = path.join(
    pathProject,
    "/public/fonts/JetBrains/JetBrainsMono-BoldItalic.ttf"
  );
  const logoHUSC = path.join(pathProject, "/public/pdf/resume/logo-husc.png");
  let tempWidth = 0;
  let xTemp = 0;
  let yTemp = 0;
  const xPadding = 50;

  const pdfPromise = new Promise<ArrayBuffer>((resolve) => {
    // config pdf
    const doc = new PDFDocument({
      font: font,
      layout: "portrait",
      // size: "A4",
    });
    const page = doc.page;
    doc.info.Author = "Tri Truong Dinh Minh";
    doc.info.Title = "Tri | Resume";

    // header
    doc.rect(0, 50, page.width, 60).fillAndStroke("#7e7e7e");
    doc.fillColor("white");
    doc
      .fontSize(24)
      .font(fontB)
      .text("Tri Truong Dinh Minh", 50, 50)
      .font(font)
      .moveDown(0);
    doc.fontSize(16).text("Web Developer").moveDown(0);
    doc.image(path.join(pathProject, "/public/imgs/avatar.jpg"), 450, 25, {
      fit: [100, 100],
      align: "center",
      valign: "center",
    });

    // About
    doc.fillColor("black");
    doc.font(fontB).text("About", 50, 120, {}).font(font);
    doc.fontSize(12).font(font);
    doc.text(
      "Hello! I am a web developer currently residing and working in Hue. I am passionate about building beautiful, optimized, and user-friendly web applications.",
      {
        width: page.width - 100,
      }
    );

    // content layout
    const sideBarWidth = 210;
    doc
      .lineWidth(3)
      .moveTo(50, 200)
      .lineTo(page.width - 50, 200)
      .stroke("#7e7e7e");
    doc.rect(50, 210, sideBarWidth, page.height - 210).fillAndStroke("#c4c4c4");

    // contact
    doc.fillColor("black");
    doc.fontSize(16).font(fontB).text("Contact", 55, 220).moveDown(0);
    doc.fontSize(11).font(font);
    SVGtoPDF(doc, phoneIcon, 55, 242);
    doc.text("+84707142229", 70);
    SVGtoPDF(doc, mailIcon, 55, 258);
    doc.text("tritruong121099@gmail.com", 70);
    SVGtoPDF(doc, mapPinIcon, 55, 272);
    doc.text("39 Ly Nam De, Hue, Viet Nam", 70);
    doc.font(fontB).text("Socials: ", 55, undefined, {
      lineBreak: false,
    });
    SVGtoPDF(
      doc.link(doc.x, doc.y + 1, 16, 16, githubLink),
      githubIcon,
      doc.x,
      doc.y + 1
    );
    SVGtoPDF(
      doc.link(doc.x + 20, doc.y + 1, 16, 16, linkedInLink),
      linkedInIcon,
      doc.x + 20,
      doc.y + 1
    );
    doc.moveDown(1);
    doc.x = 55;

    // Skills
    doc.moveDown(0.5);
    const widthSkill = sideBarWidth - 10;
    doc.font(fontB).fontSize(16).text("Skills");
    doc.fontSize(11).text("Programming Languages:");
    doc
      .font(font)
      .text("Javascript, Typescript, Python.", { width: widthSkill });
    doc.font(fontB).text("Framework:");
    doc.font(font).text("Angular, Nestjs, Odoo.", { width: widthSkill });
    doc.font(fontB).text("Testing:");
    doc.font(font).text("Jest(UT), Cypress(E2E).", { width: widthSkill });
    doc.font(fontB).text("Database:");
    doc.font(font).text("Postgresql, MongoDB.", { width: widthSkill });
    doc.font(fontB).text("Database migration & ORM:");
    doc.font(font).text("Prisma, Flyway, mongoose.", { width: widthSkill });

    doc.font(fontB).text("Languages:");
    doc.font(font).text("English.", { width: widthSkill });

    // education
    doc.moveDown(0.5);
    const logoHUSCWidth = 36;
    doc.fontSize(16).font(fontB).text("Education").font(font).fontSize(11);
    doc.image(logoHUSC, {
      width: logoHUSCWidth,
    });
    doc.x = doc.x + logoHUSCWidth + 4;
    doc
      .font(fontB)
      .text("HUE UNIVERSITY OF SCIENCES", {
        width: sideBarWidth - 4 - logoHUSCWidth - 10,
      })
      .font(font);
    doc.text("2017-2021");

    // experiences
    const xStartLine = 270;
    const yStartLine = 220;
    const experienceWidth = page.width - xStartLine - xPadding;
    doc.font(fontB).fontSize(20).text("Experiences", xStartLine, yStartLine);
    doc.fontSize(13).text("Web Developer");
    doc.font(font).text("3S Intersoft JSC.", { lineBreak: false });
    SVGtoPDF(doc, arrowSquareOutIcon, doc.x + 4, doc.y, {
      width: 10,
      height: 10,
    });
    doc.link(doc.x + 4, doc.y, 10, 10, "https://www.3si.vn/");
    doc.moveDown(1);
    doc
      .font(fontI)
      .fontSize(9)
      .text("08/2021 - Present", xStartLine, undefined, { lineBreak: false });
    const location3SCompany = "Hue, Viet Nam";
    tempWidth = doc.widthOfString(location3SCompany);
    doc
      .font(font)
      .text(location3SCompany, page.width - xPadding - tempWidth, undefined, {
        width: tempWidth + 1,
      });
    SVGtoPDF(
      doc,
      mapPinIcon,
      page.width - xPadding - tempWidth - 12,
      doc.y - 12,
      {
        width: 9,
        height: 9,
      }
    );
    doc.moveDown(0.5).fontSize(11);
    doc.text(
      "Write API document (Swagger) and UML (PlantUML).",
      xStartLine,
      undefined,
      {
        width: experienceWidth,
      }
    );
    doc.text(
      "Technologies used: Angular, Nestjs, Nodejs, Docker, Postgres, Kafka, Flyway, etc.",
      {
        width: experienceWidth,
      }
    );
    doc.text("Architecture: Microservices, Microfrontend.", {
      width: experienceWidth,
    });
    doc.text("Projects count: 3.", {
      width: experienceWidth,
    });

    // get buffers data of file pdf
    const buffers: any[] = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
      const pdfData: any = Buffer.concat(buffers);
      resolve(pdfData);
    });
    doc.end();
  });

  return new Response(await pdfPromise);
  // body: pdfBuffer.toString("base64"),
  //   isBase64Encoded: true,
};
