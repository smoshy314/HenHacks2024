"I got sample data from websites online about colleges all over the world and 
parsed the data to match the contents of our AllSchools.json file 
and our school interface using Smalltalk"

"variable declaration"
| collectionOfSchools outputStream |

"initializes the collection with the values of schools"
collectionOfSchools := OrderedCollection new.
collectionOfSchools
    add: 'Harvard University, Cambridge, USA';
    add: 'University of Cambridge, Cambridge, UK';
    add: 'Stanford University, Stanford, USA';
    add: 'Massachusetts Institute of Technology (MIT), Cambridge, USA';
    add: 'California Institute of Technology (Caltech), Pasadena, USA';
    add: 'ETH Zurich - Swiss Federal Institute of Technology, Zurich, Switzerland';
    add: 'University College London (UCL), London, UK';
    add: 'University of Chicago, Chicago, USA';
    add: 'Imperial College London, London, UK';
    add: 'Princeton University, Princeton, USA';
    add: 'Yale University, New Haven, USA';
    add: 'University of California, Berkeley (UC Berkeley), Berkeley, USA';
    add: 'University of Toronto, Toronto, Canada';
    add: 'National University of Singapore (NUS), Singapore, Singapore';
    add: 'University of Tokyo, Tokyo, Japan';
    add: 'Tsinghua University, Beijing, China';
    add: 'Peking University, Beijing, China';
    add: 'University of Melbourne, Melbourne, Australia';
    add: 'Australian National University (ANU), Canberra, Australia'.

"creates a writestream to output the data too"
outputStream := WriteStream on: String new.

"loops through the collection and formats its contents to match the 
fields for the school interface"
collectionOfSchools do: [:aSchool |
    | nameAndCountry |
    nameAndCountry := aSchool findTokens: ','.
    outputStream nextPutAll: ('{"name": "', nameAndCountry first , '", ' , '"country": "', (nameAndCountry at: 3), '"}' , ','); cr].

"displays the output of the writestream"
outputStream contents.
