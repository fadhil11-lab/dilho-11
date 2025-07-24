document.getElementById('affiliateBtn').addEventListener('click', function() {
    // Ganti link di bawah dengan link affiliate Anda
    var affiliateLink = "https://id.shp.ee/6SKnEkn";
    document.getElementById('thanksMsg').style.display = 'block';
    window.open(affiliateLink, '_blank'); // Buka di tab baru
});