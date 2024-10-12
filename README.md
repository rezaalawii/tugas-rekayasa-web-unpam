# Bootstrap Project for College Assignment

## Overview

This repository contains a web application developed as part of a college assignment, showcasing responsive design principles using Bootstrap. The project features a modern layout with a mobile-first approach, emphasizing usability and aesthetics.

## Demo

You can view the live demo of the project [here](https://rezaalawi-tugas-rekayasa-web-unpam.vercel.app).

## Features

- **Responsive Design**: Utilizes Bootstrap's grid system to ensure the layout adapts seamlessly across different devices.
- **Components**: Incorporates Bootstrap components such as navbars, cards, and modals for a user-friendly interface.
- **Custom Styling**: Implements additional styles to enhance visual appeal while maintaining a cohesive design.
- **Interactivity**: Includes interactive elements like dropdowns and modals, enhancing user engagement.

## Technologies Used

- **HTML**: For the structure of the web pages.
- **CSS**: For styling, using Bootstrap's built-in classes alongside custom styles.
- **JavaScript**: For interactivity, utilizing Bootstrap's JavaScript components.

## Installation

To get a copy of the project up and running on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/rezaalawii/tugas-rekayasa-web-unpam.git

```html
<div id="currentDateTime"></div>

<script>
    function updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: false 
        };
        document.getElementById('currentDateTime').innerHTML = now.toLocaleDateString('id-ID', options);
    }

    setInterval(updateDateTime, 1000); // Update setiap detik
    updateDateTime(); // Panggil sekali untuk menampilkan waktu segera
</script>