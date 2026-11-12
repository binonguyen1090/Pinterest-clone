require "yaml"
module Psych
  class << self
    alias_method :orig_load, :load
    def load(yaml, permitted_classes: [Symbol], permitted_symbols: [], aliases: true, filename: nil, fallback: nil, symbolize_names: false, freeze: false)
      orig_load(yaml, permitted_classes: permitted_classes, permitted_symbols: permitted_symbols, aliases: aliases, filename: filename, fallback: fallback, symbolize_names: symbolize_names, freeze: freeze)
    end
  end
end
