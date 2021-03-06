# Blooms

💡 [Bloom filters](https://en.wikipedia.org/wiki/Bloom_filter) provide a rapid and memory-efficient way to determine set membership. The Bloom filter is a probablistic data structure, so can only tell us whether an element is either _definitely not_ in a set, or _may be_ in a set. The basic idea behind the Bloom filter is to hash each new element that goes into the data set, take certain bits from this hash, and then use those bits to fill in parts of a fixed-size bit array (e.g. set certain bits to 1). This bit array is called a Bloom filter.

💡 Later, when we want to check if an element is in the set, we simply hash the element and check that the right bits are in the Bloom filter. If at least one of the bits is 0, then the element definitely isn’t in our data set! If all of the bits are 1, then the element might be in the data set (false postives are possible).

💡 We use Bloom filters to query each new block we get from a SignalR publisher event.

💡 If the block has the user's Ethereum address activity, and if the supported ERC20 tokens are in that Bloom as well, we know to refresh the user's ERC20 token balance.

💡 It’s impossible to see any trace of an Ethereum balance change in a block, so we go and fetch that balance every time a new block occurs.

💡 We created an open source library, allowing others to do this, and also, web3.js now uses this internally. This can be found [here](https://www.npmjs.com/package/ethereum-bloom-filters)
