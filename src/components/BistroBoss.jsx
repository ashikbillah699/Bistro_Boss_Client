import chefService from '../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <section className="my-20 max-w-screen-lg mx-auto flex justify-center items-center min-h-96 bg-cover bg-center" style={{ backgroundImage: `url(${chefService})` }}>
        <div className="bg-white rounded-lg shadow-lg max-w-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800">BISTRO BOSS</h2>
          <p className="mt-4 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborom deserunt ratione dolor officiis praesentium! Deserunt magni adipisci dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </section>
    );
};

export default BistroBoss;