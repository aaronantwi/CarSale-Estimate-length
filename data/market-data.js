// Vehicle database with market data and sell time factors
const vehicleData = {
    "toyota": {
        "camry": {
            category: "sedan",
            basePrice: 25000,
            avgDays: 28,
            demand: "high",
            seasonality: "stable"
        },
        "corolla": {
            category: "sedan", 
            basePrice: 22000,
            avgDays: 25,
            demand: "high",
            seasonality: "stable"
        },
        "rav4": {
            category: "suv",
            basePrice: 28000,
            avgDays: 22,
            demand: "very-high",
            seasonality: "stable"
        },
        "highlander": {
            category: "suv",
            basePrice: 35000,
            avgDays: 30,
            demand: "high",
            seasonality: "stable"
        },
        "prius": {
            category: "hybrid",
            basePrice: 24000,
            avgDays: 32,
            demand: "medium",
            seasonality: "stable"
        }
    },
    "honda": {
        "civic": {
            category: "sedan",
            basePrice: 23000,
            avgDays: 26,
            demand: "high",
            seasonality: "stable"
        },
        "accord": {
            category: "sedan",
            basePrice: 26000,
            avgDays: 29,
            demand: "high",
            seasonality: "stable"
        },
        "crv": {
            category: "suv",
            basePrice: 27000,
            avgDays: 24,
            demand: "very-high",
            seasonality: "stable"
        },
        "pilot": {
            category: "suv",
            basePrice: 33000,
            avgDays: 31,
            demand: "medium",
            seasonality: "stable"
        }
    },
    "ford": {
        "f150": {
            category: "truck",
            basePrice: 35000,
            avgDays: 35,
            demand: "high",
            seasonality: "spring-summer"
        },
        "escape": {
            category: "suv",
            basePrice: 25000,
            avgDays: 33,
            demand: "medium",
            seasonality: "stable"
        },
        "explorer": {
            category: "suv",
            basePrice: 32000,
            avgDays: 36,
            demand: "medium",
            seasonality: "stable"
        },
        "mustang": {
            category: "sports",
            basePrice: 28000,
            avgDays: 42,
            demand: "medium",
            seasonality: "spring-summer"
        }
    },
    "chevrolet": {
        "silverado": {
            category: "truck",
            basePrice: 34000,
            avgDays: 38,
            demand: "high",
            seasonality: "spring-summer"
        },
        "equinox": {
            category: "suv",
            basePrice: 24000,
            avgDays: 35,
            demand: "medium",
            seasonality: "stable"
        },
        "malibu": {
            category: "sedan",
            basePrice: 23000,
            avgDays: 40,
            demand: "low",
            seasonality: "stable"
        },
        "tahoe": {
            category: "suv",
            basePrice: 50000,
            avgDays: 45,
            demand: "medium",
            seasonality: "stable"
        }
    },
    "nissan": {
        "altima": {
            category: "sedan",
            basePrice: 24000,
            avgDays: 35,
            demand: "medium",
            seasonality: "stable"
        },
        "rogue": {
            category: "suv",
            
