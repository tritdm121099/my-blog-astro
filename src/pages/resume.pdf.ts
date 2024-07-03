import { jsPDF } from "jspdf";
import "@assets/fonts/JetBrainsMono-Regular-normal";
import { BASE } from "../consts";

export async function GET({  }) {
	const doc = new jsPDF();
	doc.text("Hello world!", 10, 10);
	const buffer = doc.output('arraybuffer')
export async function GET({}) {
  const doc = new jsPDF();
  doc.setFont("JetBrainsMono-Regular");

	return new Response(buffer);
  }  const buffer = doc.output("arraybuffer");
  doc.text("Tri Truong Dinh Minh", 10, 10);
  const buffer = doc.output("arraybuffer");

  return new Response(buffer);
}
