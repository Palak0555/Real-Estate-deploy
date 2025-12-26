import logo from './logo.png'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_2 from './project_img_2.jpg'
import flat1 from './flat1.jpeg'
import flat1b from './flat1b.jpeg'
import flat1c from './flat1c.jpeg'
import flat1d from './flat1d.jpeg'
import flat1e from './flat1e.jpeg'
import flat1f from './flat1f.jpeg'
import flat1g from './flat1g.jpeg'
import flat1h from './flat1h.jpeg'
import flat1i from './flat1i.jpeg'
import flat1j from './flat1j.jpeg'
import flat2 from './flat2.jpeg'
import flat2b from './flat2b.jpeg'
import flat2c from './flat2c.jpeg'
import flat2d from './flat2d.jpeg'
import flat2e from './flat2e.jpeg'
import flat2f from './flat2f.jpeg'
import flat3 from './flat3.jpeg'
import flat3b from './flat3b.jpeg'
import flat3c from './flat3c.jpeg'
import flat3d from './flat3d.jpeg'
import flat3e from './flat3e.jpeg'
import flat3f from './flat3f.jpeg'
import flat3g from './flat3g.jpeg'
import flat3h from './flat3h.jpeg'
import flat3i from './flat3i.jpeg'
import flats1 from './flats1.jpeg'
import flats2 from './flats2.jpeg'
import flats3 from './flats3.jpeg'
import flats4 from './flats4.jpeg'
import flatvideo from './flatvideo.mp4'

export const assets = {
  logo,
  flat1,
  flat1b,
  flat1c,
  flat1d,
  flat1e,
  flat1f,
  flat1g,
  flat1h,
  flat1i,
  flat1j,
  flatvideo,
  flat2,
  flat2b,
  flat2c,
  flat2d,
  flat2e,
  flat2f,
  flat3,
  flat3b,
  flat3c,
  flat3d,
  flat3e,
  flat3f,
  flat3g,
  flat3h,
  flat3i,
  flats1,
  flats2,
  flats3,
  flats4,
  cross_icon,
  menu_icon,
  star_icon,
  project_img_2,
  header_img,
  brand_img,
  left_arrow,
  right_arrow,
}

export const projectsData = [
  {
    id: "amarpali-riverview",
    title: "Amarpali Riverview",
    price: "₹28,000/month + maintenance",
    location: "Centurion Park Terrace Homes, Tech Zone IV, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201318",
    description: "2BHK + Study, Fully Furnished",
    address: "HCXR+JP9, Centurian Rd, Tech Zone IV, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201318",
    thumbnail: flat1,
    images: [flat1, flat1b, flat1c, flat1d, flat1e, flat1f, flat1g, flat1h, flat1i, flat1j],
    videos: [flatvideo]
  },
  {
    id: "fusion-homes",
    title: "Fusion Homes",
    price: "₹17,000/month + maintenance",
    location: "Tech Zone IV, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201318",
    description: "Affordable rental in prime location",
    address: "Tech Zone IV, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201318",
    thumbnail: flat2,
    images: [flat2, flat2b, flat2c, flat2d, flat2e, flat2f],
    videos: []
  },
  {
    id: "cherry-county",
    title: "Cherry County",
    price: "₹20,000/month + maintenance",
    location: "GH-5B, Tech Zone IV, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201306",
    description: "Well-maintained property near D-Mart",
    address: "Greater Noida W Rd, opp. D-Mart, Techzone 4, Amrapali Leisure Valley, Greater Noida, Uttar Pradesh 201318",
    thumbnail: flat3,
    images: [flat3, flat3b, flat3c, flat3d],
    videos: []
  },
  {
    id: "fusion-fiesta",
    title: "Fusion Fiesta",
    price: "₹20,000/month + maintenance",
    location: "Tech Zone IV, Greater Noida",
    description: "Modern living space in developing area",
    address: "Tech Zone IV, Greater Noida, Uttar Pradesh 201318",
    thumbnail: flat3e,
    images: [flat3e, flat3f, flat3g, flat3h, flat3i],
    videos: []
  }
]

export const salesData = [
  {
    id: "raksha-adela",
    title: "Raksha Adela Society",
    price: "₹75 Lac",
    demand: "₹75 Lac",
    lending: "₹72 Lac",
    location: "Greater Noida, Uttar Pradesh",
    type: "2BHK Apartment",
    size: "1080 sq.ft",
    description: "Spacious 2BHK apartment in prime location with excellent connectivity",
    address: "Raksha Adela Society, Greater Noida, Uttar Pradesh",
    thumbnail: flats1,
    images: [flats1, flats2, flats3, flats4],
    videos: []
  }
]

export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: flat1,
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property."
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: flat2,
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property."
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: flat3,
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property."
  }
]