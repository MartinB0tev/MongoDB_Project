// queries.js

// --- GPU Колекция ---

// Извличане: всички документи
db.gpus.find()

// Извличане: филтриране по бранд "NVIDIA"
db.gpus.find({ brand: "NVIDIA" })

// Извличане: филтриране по бранд и памет >= 12GB
db.gpus.find({ brand: "AMD", memory: { $gte: 12 } })

// Update: промяна на цената на RTX 4070
db.gpus.updateOne({ model: "RTX 4070" }, { $set: { price: 899 } })

// Delete: изтриване на GTX 1660 Super
db.gpus.deleteOne({ model: "GTX 1660 Super" })

// Aggregate: групиране по бранд и брой
db.gpus.aggregate([
  { $group: { _id: "$brand", count: { $sum: 1 } } }
])

// Aggregate: средна цена по бранд
db.gpus.aggregate([
  { $group: { _id: "$brand", avgPrice: { $avg: "$price" } } }
])

// Aggregate: филтриране памет >=8GB и сортиране по цена
db.gpus.aggregate([
  { $match: { memory: { $gte: 8 } } },
  { $sort: { price: -1 } }
])

// --- CPU Колекция ---

// Извличане: всички
db.cpus.find()

// Филтриране по бранд AMD
db.cpus.find({ brand: "AMD" })

// Филтриране по бранд Intel с ядра >= 8
db.cpus.find({ brand: "Intel", cores: { $gte: 8 } })

// Update: актуализация цена на i5-12400F
db.cpus.updateOne({ model: "i5-12400F" }, { $set: { price: 200 } })

// Delete: изтриване на Pentium G6400
db.cpus.deleteOne({ model: "Pentium G6400" })

// Aggregate: групиране по бранд със среден брой ядра
db.cpus.aggregate([
  { $group: { _id: "$brand", avgCores: { $avg: "$cores" } } }
])

// Aggregate: броене процесори с ядра >= 8
db.cpus.aggregate([
  { $match: { cores: { $gte: 8 } } },
  { $count: "highCoreCPUs" }
])

// Aggregate: сортиране по цена възходящо
db.cpus.aggregate([
  { $match: { price: { $exists: true } } },
  { $sort: { price: 1 } }
])

// --- RAM Колекция ---

// Извличане: всички
db.rams.find()

// Филтриране по тип DDR5
db.rams.find({ type: "DDR5" })

// Филтриране по тип DDR4 с размер >=16GB
db.rams.find({ type: "DDR4", size_gb: { $gte: 16 } })

// Update: актуализация цена на Corsair 16GB
db.rams.updateOne({ brand: "Corsair", size_gb: 16 }, { $set: { price: 65 } })

// Delete: изтриване на DDR3 памет
db.rams.deleteOne({ type: "DDR3" })

// Aggregate: групиране по тип и брой
db.rams.aggregate([
  { $group: { _id: "$type", totalCount: { $sum: 1 } } }
])

// Aggregate: среден размер по тип
db.rams.aggregate([
  { $group: { _id: "$type", avgSize: { $avg: "$size_gb" } } }
])

// Aggregate: филтриране размер >=16GB и сортиране по скорост
db.rams.aggregate([
  { $match: { size_gb: { $gte: 16 } } },
  { $sort: { speed_mhz: -1 } }
])

// --- Motherboards Колекция ---

// Извличане: всички
db.motherboards.find()

// Филтриране по бранд ASUS
db.motherboards.find({ brand: "ASUS" })

// Филтриране по бранд Gigabyte и форм фактор ATX
db.motherboards.find({ brand: "Gigabyte", form_factor: "ATX" })

// Update: актуализация цена на B550 AORUS Elite
db.motherboards.updateOne({ model: "B550 AORUS Elite" }, { $set: { price: 135 } })

// Delete: изтриване на B365M
db.motherboards.deleteOne({ model: "B365M" })

// Aggregate: групиране по бранд и брой
db.motherboards.aggregate([
  { $group: { _id: "$brand", count: { $sum: 1 } } }
])

// Aggregate: средна цена по бранд (само документи с цена)
db.motherboards.aggregate([
  { $match: { price: { $exists: true } } },
  { $group: { _id: "$brand", avgPrice: { $avg: "$price" } } }
])

// Aggregate: сортиране по USB портове (само документи с usb_ports)
db.motherboards.aggregate([
  { $match: { usb_ports: { $exists: true } } },
  { $sort: { usb_ports: -1 } }
])

// --- Storages Колекция ---

// Извличане: всички
db.storages.find()

// Филтриране по тип SSD
db.storages.find({ type: "SSD" })

// Филтриране по тип SSD и капацитет >=1000GB
db.storages.find({ type: "SSD", capacity_gb: { $gte: 1000 } })

// Update: актуализация цена на Samsung 1000GB
db.storages.updateOne({ brand: "Samsung", capacity_gb: 1000 }, { $set: { price: 115 } })

// Delete: изтриване на Intel дискове
db.storages.deleteOne({ brand: "Intel" })

// Aggregate: групиране по тип с брой
db.storages.aggregate([
  { $group: { _id: "$type", count: { $sum: 1 } } }
])

// Aggregate: среден капацитет по тип
db.storages.aggregate([
  { $group: { _id: "$type", avgCapacity: { $avg: "$capacity_gb" } } }
])

// Aggregate: филтриране по цена >= 100 и сортиране по цена
db.storages.aggregate([
  { $match: { price: { $gte: 100 } } },
  { $sort: { price: -1 } }
])
