// src/utils/imageUrls.js

// Define your image URLs
const imageUrls = {
  'udemy-logo-light': 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg',
  'udemy-logo': 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',

  // AWS Related
  'aws-logo.png': 'https://img-c.udemycdn.com/open-badges/v2/badge-class/1641170563/image8965422010918071331.png',
  'course-thumbnail.png': 'https://img-c.udemycdn.com/course/750x422/2932070_da38_3.jpg',
  
  // Course Related
  'sab-1.jpg': 'https://img-c.udemycdn.com/course/100x100/6000716_29c4.jpg',
  'sab-2.jpg': 'https://img-c.udemycdn.com/course/100x100/4264668_6bbd_5.jpg',
  'sab-3.jpg': 'https://img-c.udemycdn.com/course/100x100/3410432_ee50_2.jpg',
  'sab-4.jpg': 'https://img-c.udemycdn.com/course/100x100/1198532_e120_8.jpg',
  'sab-5.jpg': 'https://img-c.udemycdn.com/course/100x100/2620154_65fc_11.jpg',
  'sab-6.jpg': 'https://img-c.udemycdn.com/course/100x100/3503872_823a_3.jpg',

  'fbt-1.jpg': 'https://img-c.udemycdn.com/course/750x422/2932070_da38_3.jpg',
  'fbt-2.jpg': 'https://img-c.udemycdn.com/course/240x135/4366450_d859.jpg',
  'fbt-3.jpg': 'https://img-c.udemycdn.com/course/240x135/4362406_fc40.jpg',

  
  // Instructor Images
  'ashish-image.jpg': 'https://img-c.udemycdn.com/user/200_H/22282436_0f83_2.jpg',
  'edyoda-logo.jpg': 'https://img-c.udemycdn.com/user/200_H/98170214_2b30_2.jpg',
  
  // Other Images
  'more-ed-1.jpg': 'https://img-c.udemycdn.com/course/240x135/2795746_62d5.jpg',
  'more-ed-2.jpg': 'https://img-c.udemycdn.com/course/240x135/3033196_e7f4_3.jpg',
  'more-ed-3.jpg': 'https://img-c.udemycdn.com/course/240x135/3033186_ea5d_3.jpg',

  'more-ash-1.jpg': 'https://img-c.udemycdn.com/course/240x135/2932078_7e6f_4.jpg',
  'more-ash-2.jpg': 'https://img-c.udemycdn.com/course/240x135/3754018_537a.jpg',

  'nasdaq': 'https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg',
  'volkswagen': 'https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg',
  'box': 'https://s.udemycdn.com/partner-logos/v4/box-light.svg',
  'netapp': 'https://s.udemycdn.com/partner-logos/v4/netapp-light.svg',
  'eventbrite': 'https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg'
}

// Helper function to get image URL
export const getImageUrl = (imageName: keyof typeof imageUrls): string => {
  const url = imageUrls[imageName]
  if (!url) {
    console.warn(`Image URL not found for: ${imageName}`)
    return ''
  }
  console.log(url)
  return url
}
