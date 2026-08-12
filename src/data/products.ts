import { Product, Review } from '../types';

// Import all product images
import b1 from '../../assets/prod-images/b1.png';
import b2 from '../../assets/prod-images/b2.png';
import b3 from '../../assets/prod-images/b3.png';
import f1 from '../../assets/prod-images/f1.png';
import f2 from '../../assets/prod-images/f2.png';
import f3 from '../../assets/prod-images/f3.png';
import f4 from '../../assets/prod-images/f4.png';
import f5 from '../../assets/prod-images/f5.png';
import f6 from '../../assets/prod-images/f6.png';
import f7 from '../../assets/prod-images/f7.png';
import g1 from '../../assets/prod-images/g1.png';
import m1 from '../../assets/prod-images/m1.png';
import m2 from '../../assets/prod-images/m2.png';
import r1 from '../../assets/prod-images/r1.png';
import r2 from '../../assets/prod-images/r2.png';
import r3 from '../../assets/prod-images/r3.png';
import r4 from '../../assets/prod-images/r4.png';
import r5 from '../../assets/prod-images/r5.png';
import r6 from '../../assets/prod-images/r6.png';
import s1 from '../../assets/prod-images/s1.png';
import s2 from '../../assets/prod-images/s2.png';
import s3 from '../../assets/prod-images/s3.png';
import s4 from '../../assets/prod-images/s4.png';
import s5 from '../../assets/prod-images/s5.png';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Hanging Pendant light',
    category: 'Lighting',
    price: 140.0,
    originalPrice: 150.0,
    rating: 5,
    image: b1,
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
    image: b2,
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
    image: b3,
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
    image: f1,
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
    image: f2,
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
    image: f3,
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
    image: f4,
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
    image: f5,
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
    image: f6,
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
    image: f7,
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
    image: r1,
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
    image: r2,
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
    image: g1,
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
    image: r3,
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
    image: r4,
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
    image: r5,
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
    image: r6,
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
    image: s1,
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
    image: s2,
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
    image: s3,
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
    image: s4,
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
    image: s5,
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
    image: m1,
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
    image: m2,
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
