import { jsPDF } from "jspdf";

export async function GET({  }) {
	const doc = new jsPDF();
	doc.text("Hello world!", 10, 10);
	const buffer = doc.output('arraybuffer')

	return new Response(buffer);
  }