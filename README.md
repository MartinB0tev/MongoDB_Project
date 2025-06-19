# PC Store MongoDB Project

## Описание на базата данни

Тази база данни е проектирана да съхранява информация за различни компютърни компоненти, включително видеокарти (GPUs), процесори (CPUs), оперативна памет (RAM), дънни платки (Motherboards) и дискове за съхранение (Storages).

---

## Колекции и структура на документите

### gpus
Документите съдържат данни за видеокарти:
- brand (string) – производител, напр. NVIDIA, AMD
- model (string) – модел
- memory (number) – обем на паметта в GB
- memory_type (string, по избор) – тип памет (GDDR6, GDDR6X и др.)
- price (number) – цена в долари
- features (array, по избор) – масив с допълнителни характеристики
- warranty_years (number, по избор)
- seller (object, по избор) – с вложени полета name и country

### cpus
- brand (string)
- model (string)
- cores (number)
- threads (number)
- price (number, по избор)
- tdp (number, по избор) – Thermal Design Power
- clock (object, по избор) – с полета base и boost
- integrated_graphics (boolean, по избор)
- cache (string, по избор)

### rams
- brand (string)
- type (string) – DDR3, DDR4, DDR5
- size_gb (number) – обем в GB
- speed_mhz (number, по избор)
- price (number, по избор)
- rgb (boolean, по избор)
- kit (boolean, по избор)
- ecc (boolean, по избор)

### motherboards
- brand (string)
- model (string)
- socket (string, по избор)
- form_factor (string, по избор) – ATX, mATX и др.
- price (number, по избор)
- wifi (boolean, по избор)
- ram_slots (number, по избор)
- usb_ports (number, по избор)
- rgb (boolean, по избор)
- legacy_support (boolean, по избор)
- bios (string, по избор)

### storages
- brand (string)
- type (string) – SSD, HDD, Optane и др.
- interface (string, по избор) – NVMe, SATA
- capacity_gb (number)
- price (number, по избор)
- rpm (number, по избор) – за HDD
- warranty (string, по избор)
- rgb (boolean, по избор)
- read_speed (number, по избор)
- heatsink (boolean, по избор)

---

## Инструкции за инсталация и стартиране

1. Инсталирайте MongoDB от официалния сайт: https://www.mongodb.com/try/download/community

2. Стартирайте MongoDB сървъра:
   - На Windows: от Command Prompt (администратор) изпълнете:
     ```
     net start MongoDB
     ```
   - Или стартирайте `mongod` процеса директно.

3. Отворете Mongo Shell или MongoDB Compass и се свържете към локалния сървър (по подразбиране на `mongodb://localhost:27017`).

4. Създайте и използвайте база данни:
   ```js
   use pc_store
