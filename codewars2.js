const DNAtoRNA = (dna) => {
   const dnaRegex = /^(G|C|A|T)*$/gi
   if (dnaRegex.test(dna)) {
      return dna.replace(/t/gi, 'U').toUpperCase()
   } else {
      throw new Error("Not a valid DNA string")
   }
}
