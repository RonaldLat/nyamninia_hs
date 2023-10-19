<div class="w-full md:w-96  lg:w-3/6 md:max-w-full mx-auto ">
  <div class="p-6 border border-gray-300 sm:rounded-md">
    <form method="POST" action="">
      <label class="block mb-6">
        <span class="text-gray-700">Your name</span>
        <input
          type="text"
          name="name"
          class="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            drop-shadow-md
            focus:border-green-300
            focus:ring
            focus:ring-green-200
            focus:ring-opacity-50
          "
          placeholder="name"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Email address</span>
        <input
          name="email"
          type="email"
          class="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            drop-shadow-md
            focus:border-green-300
            focus:ring
            focus:ring-green-200
            focus:ring-opacity-50
          "
          placeholder="email@example.com"
          required
        />
      </label>
      <label class="block mb-6 ">
        <span class="text-gray-700">Message</span>
        <textarea
          name="message"
          class="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            drop-shadow-md
            focus:border-green-300
            focus:ring
            focus:ring-green-200
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="Your message..."
        ></textarea>
      </label>
      <div class="mb-6">
        <button
          type="submit"
          class="
            h-10
            px-5
            text-gray-50
            bg-green-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-green-800
          "
        >
          Contact Us
        </button>
      </div>
      <div>
        <div class="mt-2 hidden text-gray-700 text-right text-xs">
          by
          <a href="https://herotofu.com" class="hover:underline" target="_blank"
            >HeroTofu</a
          >
        </div>
      </div>
    </form>
  </div>
</div>
