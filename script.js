:root {
    --primary: #4f46e5;
    --primary-dark: #4338ca;
    --secondary: #0ea5e9;
    --bg: #f8fafc;
    --text-dark: #1e293b;
    --text-light: #64748b;
    --white: #ffffff;
    --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: var(--bg);
    color: var(--text-dark);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

/* Navbar */
.navbar {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    padding: 1.2rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #e2e8f0;
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary);
}

.logo span {
    color: var(--text-dark);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-light);
    font-weight: 600;
    transition: 0.3s;
}

.nav-links a:hover {
    color: var(--primary);
}

/* Buttons */
.btn-primary {
    background: var(--primary);
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 12px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

.btn-login {
    background: #f1f5f9;
    border: none;
    padding: 0.6rem 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
}

.btn-whatsapp {
    display: inline-block;
    background: #25d366;
    color: white;
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: bold;
    margin-top: 20px;
}

/* Hero */
.hero-content {
    padding: 100px 0;
    text-align: center;
}

.hero-text h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.highlight {
    color: var(--primary);
}

/* Product Grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.card {
    background: var(--white);
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: var(--shadow);
    transition: 0.3s;
    border: 1px solid #f1f5f9;
}

.card:hover {
    transform: translateY(-10px);
}

.card img {
    width: 100%;
    border-radius: 15px;
    margin-bottom: 1.2rem;
}

.price {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--primary);
    margin: 0.5rem 0;
}

/* Pages Control */
.page {
    display: none;
    min-height: 80vh;
}

.page.active {
    display: block;
    animation: fadeInUp 0.6s ease;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.hidden { display: none; }

.footer {
    padding: 3rem 0;
    background: #f1f5f9;
    text-align: center;
    margin-top: 5rem;
}
