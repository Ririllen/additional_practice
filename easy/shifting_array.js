// https://leetcode.com/problems/rotate-array/?envType=study-plan&id=algorithm-i

// Fie
//  nums => array of integers
//  k => times to shift
//  n => nums.length
// Daca k > n atunci toate elementele array-ului for face k/n
// cicluri complete.
// Ex: nums = [1,2,3] ; n = 3
// k = 3 (3/3 = 1 cicluri complete)
// ===
// output : [1,2,3]
// k = 6 (6/3 = 2 cicluri  complete)
// ===
// output : [1,2,3]
// Deci cind k este multiplul lui n (k se imparte fara rest la n) - nu este nevoie sa facem nimic.
// Atunci cind restul impartirii lui k la n (k%n) este diferit de zero trebu sa shift-am exact cu restul.
// Ex: nums = [1,2,3] ; n = 3
// k = 2 (2/3 = 0.[ceva] cicluri complete + 2 % 3 = 2 shifts)
// ===
// output : [2,3,1]
// k = 4 (4/3 = 1.[ceva] cicluri complete + 4 % 3 = 1 shift)
// ===
// output : [3,1,2]
// k = 8 (8/3 = 2.[ceva] cicluri complete + 8 % 3 = 2 shifts)
// ===
// output : [2,3,1]
// Dupa ce am stabilit cite shift-uri trebuiesc efectuate sa tabilim ce inseamna sa facem un shift
// dupa un shift elementul de pe pozitia i din array-ul original, se muta pe pozitia i+1, dupa 2 shift-uri
// se muta pe pozitia i+2, pentru k se muta pe i+k
// deci nums[(i+k)%n] = nums[i]
// solutie :
var rotate = function(nums, k) {    
    let n = nums.length
    let numsCopy = [...nums]; // facem copie al array-ului ca sa avem valorile initiale
					// fiindca instructiunea nums[(i+k)%n] = nums[i]
					// va supascrie valoare nums[(i+k)%n] cu nums[i]
					// deci rearanjam elementele in nums cu ajutorul copiei sale
					// nums[(i+k)%n] = numsCopy[i]
    for (let i = 0; i < n; i++) {
	nums[(i+k)%n] = numsCopy[i];
    }    
	return nums;
};


console.log(rotate([1,2,3,4,5,6,7],3));
