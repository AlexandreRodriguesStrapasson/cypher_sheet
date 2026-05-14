import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function exportSheetToPdf(node, filename = 'ficha-cypher.pdf') {
  if (!node) throw new Error('No sheet node to export');

  const canvas = await html2canvas(node, {
    backgroundColor: '#0a0a0a',
    scale: 2,
    useCORS: true,
  });

  const imgData = canvas.toDataURL('image/png');
  const orientation = canvas.width >= canvas.height ? 'landscape' : 'portrait';
  const pdf = new jsPDF({ orientation, unit: 'pt', format: 'a4' });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
  const renderWidth = canvas.width * ratio;
  const renderHeight = canvas.height * ratio;
  const x = (pageWidth - renderWidth) / 2;
  const y = (pageHeight - renderHeight) / 2;

  pdf.addImage(imgData, 'PNG', x, y, renderWidth, renderHeight);
  pdf.save(filename);
}
