Link hasil deploy di vercel : https://project-ccdt-backup.vercel.app

Cara melakukan instalasi tailwind : 
1. npm install tailwindcss @tailwindcss/cli
2. lalu buat file input.css dan masukan code ini @import "tailwindcss";
3. dari npm install tadi bakal ada package.json, disana kasi code 
"build": "npx @tailwindcss/cli -i ./assets/css/input.css -o ./assets/css/output.css --minify",
"watch": "npx @tailwindcss/cli -i ./assets/css/input.css -o ./assets/css/output.css --watch"
4. lalu setelah itu di terminal ketik npm run watch, dan selesai
				