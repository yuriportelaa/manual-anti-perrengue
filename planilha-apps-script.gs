/**
 * Já instalado na planilha "Leads – Manual Anti-Perrengue".
 * Grava cada cadastro da landing page como uma linha na aba "Leads".
 */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
  const d = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(d.criadoEm || Date.now()),
    d.nome, "'" + d.telefone, d.email,
    d.aceiteContato ? "Sim" : "Não", d.origem || ""
  ]);
  return ContentService.createTextOutput("ok");
}
