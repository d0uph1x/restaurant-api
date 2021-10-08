const express = require('express')
const app = express()
app.use(express.json())

app.get('/restaurants/api/v1/meals', (req, res) => {
    const meals = [
        {
            meal_id: 1, meal_name: 'Salad', meal_price: '5600',
            meal_image: 'https://image.shutterstock.com/image-photo/salad-octopus-lime-600w-1937598910.jpg'
        }
    ]
    res.status(200).json({ status: true, data: meals })
})

const PORT = process.env.PORT || 5400
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`)
})