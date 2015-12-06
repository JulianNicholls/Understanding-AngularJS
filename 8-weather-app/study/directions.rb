dir_arr = %w{N NNE NE ENE E ESE SE SSE S SSW SW WSW W WNW NW NNW}

first = -11.25

until dir_arr.empty? do
  printf "[%6.2f, %6.2f, '%s'],\n", first, first + 22.5, dir_arr.shift

  first += 22.5
end
