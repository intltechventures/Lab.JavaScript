'use strict';

var crypto = require('crypto');

console.info(crypto.randomBytes(12).toString('hex'));

// When generating a unique ID with the crypto function, 
// what is the probability of collision?
// 
// For a 12 byte to-hex-string (output as 24 characters)
// The 24 character string storable in 192 bits
// We can compute the risk of collision by the following formula:
// 
// p = (max number of IDs assumed to be created)^2 / 2^(bits of an ID + 1)
// 
// Let us assume 10 billion IDs as our maximum upper limit.
// Thus, for a 12 byte ID - converted to a 24 character string, we have
//
// p = 10,000,000,000^2 / 2^(192 + 1) = 7.96546 * 10^(-45)