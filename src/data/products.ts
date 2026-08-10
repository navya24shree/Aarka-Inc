import { Product, Review } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Hanging Pendant light',
    category: 'Lighting',
    price: 140.0,
    originalPrice: 150.0,
    rating: 5,
    image:'../assets/prod-images/b1.png',
    onSale: true,
    isNew: true,
    discountPercentage: 7,
    specs: {
      'Movement': 'Automatic Chronograph',
      'Case Material': '316L Stainless Steel',
      'Water Resistance': '10 ATM / 100 meters',
      'Glass': 'Sapphire Crystal Anti-Reflective'
    }
  },
  {
    id: 'prod-2',
    name: 'Circular Pendant Lights',
    category: 'Lighting',
    price: 110.0,
    originalPrice: 120.0,
    rating: 4,
    image: '../assets/prod-images/b2.png',
    onSale: true,
    specs: {
      'Processor': 'Octa-Core 3.2GHz',
      'Display': '6.7" OLED 120Hz',
      'Storage': '256GB NVMe',
      'Battery': '5000mAh Supercharge'
    }
  },
  {
    id: 'prod-3',
    name: '35W Ceiling LED Light',
    category: 'Lighting',
    price: 110.0,
    originalPrice: 120.0,
    rating: 4,
    image: '../assets/prod-images/b3.png',
    onSale: true,
    specs: {
      'Processor': 'Octa-Core 3.2GHz',
      'Display': '6.7" OLED 120Hz',
      'Storage': '256GB NVMe',
      'Battery': '5000mAh Supercharge'
    }
  },

  {
    id: 'prod-4',
    name: 'Celing fan with light,remote control',
    category: 'Fans',
    price: 45.0,
    rating: 5,
    image: '../assets/prod-images/f1.png',
    isNew: true,
    specs: {
      'Channels': '4 Independent Isolated Channels',
      'Trigger Voltage': '24V DC / 10A Output',
      'Mounting': 'Standard 35mm DIN Rail',
      'Isolation': 'Optocoupler 2500V'
    }
  },
  {
    id: 'prod-5',
    name: 'Celing fan',
    category: 'Fans',
    price: 45.0,
    rating: 5,
    image: '../assets/prod-images/f2.png',
    isNew: true,
    specs: {
      'Channels': '4 Independent Isolated Channels',
      'Trigger Voltage': '24V DC / 10A Output',
      'Mounting': 'Standard 35mm DIN Rail',
      'Isolation': 'Optocoupler 2500V'
    }
  },
  {
    id: 'prod-6',
    name: 'Celing fan with light',
    category: 'Fans',
    price: 45.0,
    rating: 5,
    image: '../assets/prod-images/f3.png',
    isNew: true,
    specs: {
      'Channels': '4 Independent Isolated Channels',
      'Trigger Voltage': '24V DC / 10A Output',
      'Mounting': 'Standard 35mm DIN Rail',
      'Isolation': 'Optocoupler 2500V'
    }
  },
  {
    id: 'prod-7',
    name: 'Pedestal fan',
    category: 'Fans',
    price: 45.0,
    rating: 5,
    image: '../assets/prod-images/f4.png',
    isNew: true,
    specs: {
      'Channels': '4 Independent Isolated Channels',
      'Trigger Voltage': '24V DC / 10A Output',
      'Mounting': 'Standard 35mm DIN Rail',
      'Isolation': 'Optocoupler 2500V'
    }
  },
  {
    id: 'prod-8',
    name: 'Portable Desk fan',
    category: 'Fans',
    price: 45.0,
    rating: 5,
    image: '../assets/prod-images/f5.png',
    isNew: true,
    specs: {
      'Channels': '4 Independent Isolated Channels',
      'Trigger Voltage': '24V DC / 10A Output',
      'Mounting': 'Standard 35mm DIN Rail',
      'Isolation': 'Optocoupler 2500V'
    }
  },
  {
    id: 'prod-9',
    name: 'Exhaust fan - Black',
    category: 'Fans',
    price: 45.0,
    rating: 5,
    image: '../assets/prod-images/f6.png',
    isNew: true,
    specs: {
      'Channels': '4 Independent Isolated Channels',
      'Trigger Voltage': '24V DC / 10A Output',
      'Mounting': 'Standard 35mm DIN Rail',
      'Isolation': 'Optocoupler 2500V'
    }
  },
  {
    id: 'prod-10',
    name: 'Exhaust fan - Orange',
    category: 'Fans',
    price: 45.0,
    rating: 5,
    image: '../assets/prod-images/f7.png',
    isNew: true,
    specs: {
      'Channels': '4 Independent Isolated Channels',
      'Trigger Voltage': '24V DC / 10A Output',
      'Mounting': 'Standard 35mm DIN Rail',
      'Isolation': 'Optocoupler 2500V'
    }
  },
  {
    id: 'prod-11',
    name: 'Line Monitoring relay',
    category: 'Relay Modules',
    price: 45.0,
    rating: 5,
    image: '../assets/prod-images/r1.png',
    isNew: true,
    specs: {
      'Channels': '4 Independent Isolated Channels',
      'Trigger Voltage': '24V DC / 10A Output',
      'Mounting': 'Standard 35mm DIN Rail',
      'Isolation': 'Optocoupler 2500V'
    }
  },
  {
    id: 'prod-12',
    name: 'Selec Line Monitoring relay',
    category: 'Relay Modules',
    price: 45.0,
    rating: 5,
    image: '../assets/prod-images/r2.png',
    isNew: true,
    specs: {
      'Channels': '4 Independent Isolated Channels',
      'Trigger Voltage': '24V DC / 10A Output',
      'Mounting': 'Standard 35mm DIN Rail',
      'Isolation': 'Optocoupler 2500V'
    }
  },
  {
    id: 'prod-13',
    name: 'Selec Advanced Static Var Generator',
    category: 'Generators',
    price: 1299.0,
    rating: 5,
    image: '../assets/prod-images/g1.png',
    specs: {
      'Output Power': '7500 Peak Watts / 6800 Running',
      'Fuel Type': 'Ultra-low Sulfur Diesel',
      'Runtime': '14 Hours @ 50% Load',
      'Noise Level': '68 dBA @ 7 meters'
    }
  },
  {
    id: 'prod-14',
    name: 'Digital earth fault relay',
    category: 'Relay Modules',
    price: 350.0,
    rating: 5,
    image: '../assets/prod-images/r3.png',
    onSale: true,
    discountPercentage: 15,
    specs: {
      'Power': '5 HP / 3.7 kW',
      'Phase': '3-Phase 460V',
      'RPM': '1750 RPM',
      'Efficiency': 'Premium IE3 Efficiency'
    }
  },
  {
    id: 'prod-15',
    name: 'Thermister protection relay',
    category: 'Relay Modules',
    price: 89.99,
    rating: 3,
    image: '../assets/prod-images/r4.png',
    onSale: true,
    specs: {
      'Connectivity': 'Bluetooth 5.3 & AUX',
      'Battery Life': '24 Hours continuous',
      'Protection': 'IP67 Dust & Water'
    }
  },
  {
    id: 'prod-16',
    name: 'Voltage moniroting relay',
    category: 'Relay Modules',
    price: 899.0,
    rating: 4,
    image: '../assets/prod-images/r5.png',
    onSale: true,
    specs: {
      'Processor': 'Intel Core i7-14700H',
      'RAM': '32GB DDR5',
      'Storage': '1TB NVMe PCIe Gen4',
      'GPU': 'NVIDIA RTX 4060 8GB'
    }
  },
  {
    id: 'prod-17',
    name: 'Earth leakage relay',
    category: 'Relay Modules',
    price: 199.0,
    rating: 5,
    image: '../assets/prod-images/r6.png',
    specs: {
      'Driver': '50mm Neodymium Titanium',
      'Frequency Response': '10Hz - 40,000Hz',
      'ANC': '-38dB Active Hybrid ANC'
    }
  },
  {
    id: 'prod-18',
    name: 'Proximity & Photoelectric sensor',
    category: 'Sensors',
    price: 129.0,
    rating: 4,
    image: '../assets/prod-images/s1.png',
    specs: {
      'Sound': '7.1 Spatial Audio',
      'Mic': 'Detachable Noise-Canceling Boom',
      'Lighting': 'Chroma RGB 16.8M Colors'
    }
  },
  {
    id: 'prod-19',
    name: 'Smart vision sensor',
    category: 'Sensors',
    price: 159.0,
    originalPrice: 179.0,
    rating: 5,
    image: '../assets/prod-images/s2.png',
    onSale: true,
    specs: {
      'Latency': '<15ms Ultra Low Latency',
      'Battery': '35 Hours Battery',
      'Connection': '2.4GHz Dongle & Bluetooth 5.2'
    }
  },
  {
    id: 'prod-20',
    name: 'Inclination & accelertion sensor',
    category: 'Sensors',
    price: 75.0,
    rating: 5,
    image: '../assets/prod-images/s3.png',
    specs: {
      'Protocol': 'Modbus RTU over RS485',
      'Accuracy': '±0.2°C Temperature / ±1.5% RH',
      'Enclosure': 'NEMA 4X / IP66 Stainless Steel'
    }
  },
  {
    id: 'prod-21',
    name: 'Rotatory encoders',
    category: 'Sensors',
    price: 115.0,
    rating: 4,
    image: '../assets/prod-images/s4.png',
    specs: {
      'Luminous Efficacy': '160 lm/W (32,000 Lumens)',
      'Lifespan': '50,000 Hours L70',
      'Input Voltage': '100-277V AC'
    }
  },
  {
    id: 'prod-22',
    name: 'Angle sensors',
    category: 'Sensors',
    price: 115.0,
    rating: 4,
    image: '../assets/prod-images/s5.png',
    specs: {
      'Luminous Efficacy': '160 lm/W (32,000 Lumens)',
      'Lifespan': '50,000 Hours L70',
      'Input Voltage': '100-277V AC'
    }
  },
  {
    id: 'prod-23',
    name: 'Digital Panel meter',
    category: 'Meters',
    price: 115.0,
    rating: 4,
    image: '../assets/prod-images/m1.png',
    specs: {
      'Luminous Efficacy': '160 lm/W (32,000 Lumens)',
      'Lifespan': '50,000 Hours L70',
      'Input Voltage': '100-277V AC'
    }
  },
  {
    id: 'prod-24',
    name: 'Hour meter',
    category: 'Meters',
    price: 115.0,
    rating: 4,
    image: '../assets/prod-images/m2.png',
    specs: {
      'Luminous Efficacy': '160 lm/W (32,000 Lumens)',
      'Lifespan': '50,000 Hours L70',
      'Input Voltage': '100-277V AC'
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Chief Engineer, Apex Automation',
    text: '"The performance of these components is unmatched. A game-changer for my setup."',
    rating: 5
  },
  {
    id: 'rev-2',
    author: 'Lead Architect, CyberDyne Systems',
    text: '"Absolutely incredible build quality. The precision engineering is evident in every detail."',
    rating: 5
  },
  {
    id: 'rev-3',
    author: 'Logistics Director, Global Logistics Corp',
    text: '"Fastest shipping I\'ve ever experienced, and the customer support was incredibly helpful."',
    rating: 5
  },
  {
    id: 'rev-4',
    author: 'Senior Systems Admin, Matrix Tech',
    text: '"The tactile feedback on the new keyboard series is phenomenal. Worth every penny."',
    rating: 5
  }
];

export const INDUSTRY_BRANDS = [
  'POLYCAB',
  'OMRON',
  'SIEMENS',
  'LEGRAND',
  'NEPTUNE',
  'WADPACK',
  'SIGNODE',
  'GRIFFITH FOODS'
];
