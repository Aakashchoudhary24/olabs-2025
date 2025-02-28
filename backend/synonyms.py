from nltk.corpus import wordnet

def expand_query(query):
    synonyms = set(query.split())  

    for word in query.split():
        for syn in wordnet.synsets(word):
            for lemma in syn.lemmas():
                synonyms.add(lemma.name().replace("_", " "))

    return " ".join(synonyms) if synonyms else query
