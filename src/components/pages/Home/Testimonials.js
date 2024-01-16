import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Sophie',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Exceptional service! Loved the ambiance and the delicious menu.`,
  },
  {
    fullName: 'Alex',
    image: customer4Image,
    rating: [1, 1, 1, 1, 1],
    says: `Outstanding experience, great food, and friendly staff.`,
  },
  {
    fullName: 'Tom',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Fantastic place! The flavors were amazing, and the staff was attentive`,
  },
  {
    fullName: 'Saleha',
    image: customer2Image,
    rating: [1, 1, 1, 1],
    says: `Impressive! The quality of the meals exceeded my expectations.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
