let z = newNpc;
newNpc = a => {
   z(a);
   for(h in a){
      if (a[h].wt>19 && a[h].wt<=29 && !a[h].hasOwnProperty('fake') && hero.clan !== undefined){
         chatSend(` sell złoto za pln oraz wszystkie legendy za przelew więcej info na moim fb j3bać tą gre speirdoloną XDDD`);
      }
   }
};
