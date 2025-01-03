function resumeDownload (){
    const link = document.createElement('a');
    link.href = 'https://github.com/CalebErickson21/portfolio/raw/refs/heads/main/downloadables/Caleb%20Erickson%20Resume.docx';
    link.download = 'Caleb_Erickson_Resume.docx';
    link.click();
};

function sendEmail() {
  const subject = encodeURIComponent(document.getElementById('emailSubject').value);
  const body = encodeURIComponent(document.getElementById('emailBody').value);
  window.location.href = `mailto:crerickson@crimson.ua.edu?subject=${subject}&body=${body}`;
}