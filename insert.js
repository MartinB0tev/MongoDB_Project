// insert.js

// Вмъкване на документи в колекцията gpus (видеокарти)
db.gpus.insertMany([
  { brand: "NVIDIA", model: "RTX 4070", memory: 12, memory_type: "GDDR6X", price: 950 },
  { brand: "AMD", model: "RX 6700 XT", memory: 12, features: ["Ray tracing"], price: 650 },
  { brand: "Intel", model: "Arc A770", memory: 16, price: 400, release_year: 2022 },
  { brand: "NVIDIA", model: "GTX 1660 Super", price: 230 },
  { brand: "AMD", model: "RX 7900 XTX", memory: 24, cooling: "Triple Fan", price: 999 },
  { brand: "NVIDIA", model: "RTX 3060 Ti", memory: 8, price: 450, warranty_years: 3 },
  { brand: "AMD", model: "RX 580", price: 150, used: true },
  { brand: "NVIDIA", model: "RTX 4080", memory: 16, rgb: true },
  { brand: "NVIDIA", model: "RTX 3090", memory: 24, seller: { name: "PC World", country: "Germany" }, price: 1200 },
  { brand: "AMD", model: "RX 7600", memory: 8, features: ["FSR", "AV1"], price: 350 }
]);

// Вмъкване на документи в колекцията cpus (процесори)
db.cpus.insertMany([
  { brand: "Intel", model: "i9-13900K", cores: 24, threads: 32, price: 680 },
  { brand: "AMD", model: "Ryzen 7 5800X", cores: 8, threads: 16, price: 350 },
  { brand: "Intel", model: "i5-12400F", cores: 6, price: 180 },
  { brand: "AMD", model: "Ryzen 5 7600X", tdp: 105, clock: { base: 4.7, boost: 5.3 } },
  { brand: "Intel", model: "i7-13700K", price: 450, integrated_graphics: true },
  { brand: "AMD", model: "Ryzen 9 7950X", cores: 16, threads: 32 },
  { brand: "Intel", model: "i3-10100", price: 120, cache: "6MB" },
  { brand: "AMD", model: "Athlon 3000G", cores: 2, threads: 4 },
  { brand: "Intel", model: "Pentium G6400", tdp: 58, price: 70 },
  { brand: "AMD", model: "Ryzen Threadripper 3990X", cores: 64, threads: 128, price: 3990 }
]);

// Вмъкване на документи в колекцията rams (RAM памет)
db.rams.insertMany([
  { brand: "Corsair", type: "DDR4", size_gb: 16, speed_mhz: 3200, rgb: true },
  { brand: "G.Skill", type: "DDR5", size_gb: 32, speed_mhz: 6000 },
  { brand: "Kingston", type: "DDR4", size_gb: 8, price: 35 },
  { brand: "Crucial", type: "DDR4", size_gb: 16, kit: true },
  { brand: "TeamGroup", size_gb: 16, ecc: false },
  { brand: "ADATA", type: "DDR5", speed_mhz: 4800 },
  { brand: "Patriot", type: "DDR4", rgb: true },
  { brand: "HyperX", type: "DDR3", size_gb: 8 },
  { brand: "Corsair", type: "DDR4", size_gb: 32, timings: "16-18-18-36" },
  { brand: "G.Skill", type: "DDR5", size_gb: 64, voltage: 1.35 }
]);

// Вмъкване на документи в колекцията motherboards (дънни платки)
db.motherboards.insertMany([
  { brand: "ASUS", model: "ROG STRIX B550-F", socket: "AM4", form_factor: "ATX", price: 180 },
  { brand: "Gigabyte", model: "Z690 AORUS", socket: "LGA1700", price: 250 },
  { brand: "MSI", model: "B450M PRO-VDH", form_factor: "mATX" },
  { brand: "ASRock", model: "X570 Phantom Gaming", wifi: true },
  { brand: "ASUS", model: "PRIME H610M", socket: "LGA1700", ram_slots: 2 },
  { brand: "Gigabyte", model: "B550 AORUS Elite", price: 130 },
  { brand: "MSI", model: "Z790 Tomahawk", usb_ports: 10 },
  { brand: "ASUS", model: "TUF GAMING X570", rgb: true },
  { brand: "ASRock", model: "B650 PG Lightning", form_factor: "ATX", bios: "UEFI" },
  { brand: "Biostar", model: "B365M", price: 80, legacy_support: true }
]);

// Вмъкване на документи в колекцията storages (дискове)
db.storages.insertMany([
  { brand: "Samsung", type: "SSD", interface: "NVMe", capacity_gb: 1000, price: 120 },
  { brand: "WD", type: "HDD", capacity_gb: 2000, rpm: 7200 },
  { brand: "Seagate", type: "HDD", capacity_gb: 1000, price: 50 },
  { brand: "Crucial", type: "SSD", interface: "SATA", capacity_gb: 500 },
  { brand: "Kingston", type: "SSD", capacity_gb: 240 },
  { brand: "Toshiba", type: "HDD", capacity_gb: 4000, warranty: "3y" },
  { brand: "PNY", type: "SSD", interface: "NVMe", read_speed: 3500 },
  { brand: "ADATA", type: "SSD", capacity_gb: 1000, rgb: true },
  { brand: "Intel", type: "Optane", capacity_gb: 16 },
  { brand: "Samsung", type: "SSD", interface: "NVMe", capacity_gb: 2000, price: 200, heatsink: true }
]);
