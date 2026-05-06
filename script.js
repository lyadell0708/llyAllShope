/**
 * KONFIGURASI DATA PRODUK
 * Anda bisa menambah atau menghapus produk di dalam array ini
 */
const products = [
    { 
        id: 1, 
        name: "Canva Pro 1 Thn", 
        price: "Rp 35.000", 
        desc: "Akses desain tanpa batas dengan fitur premium resmi.", 
        img: "https://via.placeholder.com/250x150" 
    },
    { 
        id: 2, 
        name: "Youtube Premium", 
        price: "Rp 15.000", 
        desc: "Nonton tanpa iklan dan background play aktif selamanya.", 
        img: "https://via.placeholder.com/250x150" 
    },
    { 
        id: 3, 
        name: "Spotify 3 Bulan", 
        price: "Rp 45.000", 
        desc: "Dengarkan musik tanpa gangguan iklan kualitas tinggi.", 
        img: "https://via.placeholder.com/250x150" 
    },
    { 
        id: 4, 
        name: "Netflix UHD 4K", 
        price: "Rp 120.000", 
        desc: "Kualitas gambar terbaik untuk bioskop di rumah Anda.", 
        img: "https://via.placeholder.com/250x150" 
    }
];

/**
 * FUNGSI NAVIGASI HALAMAN (Single Page Application logic)
 */
function showPage(pageId) {
    // Sembunyikan semua section dengan menghapus class 'active'
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Tampilkan page yang dipilih
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Scroll ke atas otomatis saat pindah halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * FUNGSI RENDER PRODUK
 * Menampilkan data dari array 'products' ke dalam HTML
 */
function renderProducts() {
    const productContainer = document.getElementById('product-list');
    
    // Jika kontainer tidak ditemukan, hentikan fungsi
    if (!productContainer) return;

    // Bersihkan kontainer sebelum diisi
    productContainer.innerHTML = '';

    // Loop data produk
    products.forEach(product => {
        const productCard = `
            <div class="card">
                <img src="${product.img}" alt="${product.name}">
                <div class="card-body">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                    <p class="desc">${product.desc}</p>
                    <button class="btn-buy" onclick="handleBuy('${product.name}')">Beli Sekarang</button>
                </div>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

/**
 * LOGIKA AUTENTIKASI (Login & Logout)
 */
function handleLogin(event) {
    event.preventDefault(); // Mencegah refresh halaman
    
    const emailInput = document.getElementById('email-input');
    const userEmail = emailInput.value;

    if (userEmail) {
        // Sembunyikan tombol login, tampilkan info user
        document.getElementById('login-btn').classList.add('hidden');
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('user-email').innerText = userEmail;

        alert(`Selamat datang di IlyaAllShope, ${userEmail}!`);
        showPage('home'); // Arahkan ke home setelah login
        emailInput.value = ''; // Reset input
    }
}

function logout() {
    const yakin = confirm("Apakah Anda yakin ingin keluar?");
    if (yakin) {
        // Tampilkan kembali tombol login, sembunyikan info user
        document.getElementById('login-btn').classList.remove('hidden');
        document.getElementById('user-info').classList.add('hidden');
        document.getElementById('user-email').innerText = '';

        alert("Anda telah berhasil logout.");
        showPage('home');
    }
}

/**
 * FUNGSI PEMBELIAN
 */
function handleBuy(productName) {
    const isLoggedIn = !document.getElementById('user-info').classList.contains('hidden');

    if (isLoggedIn) {
        alert(`Pesanan untuk ${productName} telah diterima. Admin akan menghubungi Anda via email.`);
    } else {
        alert("Mohon maaf, Anda harus Login terlebih dahulu untuk melakukan pembelian.");
        showPage('login');
    }
}

/**
 * INISIALISASI
 * Fungsi yang dijalankan saat browser selesai memuat halaman
 */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    console.log("IlyaAllShope Script Loaded Successfully!");
});
