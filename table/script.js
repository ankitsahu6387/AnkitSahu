function openDetails(subject, teacher) {
    const detailsPage = `details.html?subject=${encodeURIComponent(subject)}&teacher=${encodeURIComponent(teacher)}`;
    window.location.href = detailsPage;
  }
  