function Information() {
    var name = info.name.value;
    var mail = info.E-MAIL.value;
    var ASSUNTO = info.ASSUNTO.value;
    var MESSAGE= info.MESSAGE.value;

document.writeln("<table>");
document.writeln("<caption> <h3>information in inter <h3></caption>"); 
document.writeln("<tr><td> <b>name: </b></td> <td>" + name + " </td> </tr>");
document.writeln("<tr><td> <b>E-MAIL: </b></td> <td>" + mail + " </td> </tr>");
document.writeln("<tr><td> <b>ASSUNTO: </b></td> <td>" + ASSUNTO + " </td> </tr>");
document.writeln("<tr><td> <b>MESSAGE: </b></td> <td>" + MESSAGE + " </td> </tr>");
document.writeln("<table>");



}
