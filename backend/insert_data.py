import psycopg2
from embeddings import embed_text

# PostgreSQL connection details
DB_PARAMS = {
    "dbname": "olabs",
    "user": "sunil",
    "password": "postgres",
    "host": "localhost",
    "port": "5432"
}

# Function to insert experiments
def insert_experiments():
    conn = psycopg2.connect(**DB_PARAMS)
    cursor = conn.cursor()

    # Sample experiments dataset
    experiments = [
        {"title": "Acceleration Due to Gravity", "description": "Determine acceleration due to gravity using a simple pendulum.", "subject": "Physics"},
        {"title": "Ohm’s Law Experiment", "description": "Verify Ohm’s law by measuring voltage and current across a resistor.", "subject": "Physics"},
        {"title": "Newton’s Laws of Motion", "description": "Study the laws of motion using real-world examples and simulations.", "subject": "Physics"},
        {"title": "Projectile Motion", "description": "Analyze the motion of a projectile under the influence of gravity.", "subject": "Physics"},
        {"title": "Reflection and Refraction", "description": "Investigate the behavior of light when it passes through different media.", "subject": "Physics"},
        {"title": "Magnetic Field Lines", "description": "Observe the magnetic field patterns produced by different magnets.", "subject": "Physics"},
        {"title": "Electromagnetic Induction", "description": "Demonstrate how changing magnetic fields can generate electric current.", "subject": "Physics"},
        {"title": "Simple Harmonic Motion", "description": "Study oscillations in a pendulum and a spring-mass system.", "subject": "Physics"},
        {"title": "Thin Lenses and Image Formation", "description": "Explore how convex and concave lenses affect light rays.", "subject": "Physics"},
        {"title": "Acid-Base Titration", "description": "Perform an acid-base titration to determine the concentration of a solution.", "subject": "Chemistry"},
        {"title": "Thermochemistry Experiment", "description": "Measure enthalpy changes during chemical reactions.", "subject": "Chemistry"},
        {"title": "Electrolysis of Water", "description": "Demonstrate the electrolysis process by splitting water into hydrogen and oxygen.", "subject": "Chemistry"},
        {"title": "Rate of Chemical Reactions", "description": "Study factors affecting the rate of a chemical reaction.", "subject": "Chemistry"},
        {"title": "Identification of Gases", "description": "Identify different gases like oxygen, hydrogen, and carbon dioxide using chemical tests.", "subject": "Chemistry"},
        {"title": "Preparation of Salts", "description": "Learn how to prepare different types of salts in the lab.", "subject": "Chemistry"},
        {"title": "pH and Universal Indicator", "description": "Measure the pH of different substances using a universal indicator.", "subject": "Chemistry"},
        {"title": "Chemical Equilibrium", "description": "Demonstrate Le Chatelier’s principle by shifting equilibrium reactions.", "subject": "Chemistry"},
        {"title": "Redox Reactions", "description": "Observe oxidation and reduction reactions using various reactants.", "subject": "Chemistry"},
        {"title": "Photosynthesis Experiment", "description": "Investigate how plants convert light energy into chemical energy.", "subject": "Biology"},
        {"title": "Osmosis and Diffusion", "description": "Study the movement of water and solutes across a membrane.", "subject": "Biology"},
        {"title": "Human Digestive System", "description": "Understand the working of the human digestive system through simulations.", "subject": "Biology"},
        {"title": "Respiratory System", "description": "Explore how oxygen is transported in the human body.", "subject": "Biology"},
        {"title": "Heart Rate and Exercise", "description": "Analyze how physical activity affects heart rate.", "subject": "Biology"},
        {"title": "Microorganisms Under the Microscope", "description": "Observe different types of microorganisms using a microscope.", "subject": "Biology"},
        {"title": "DNA Extraction", "description": "Learn how to extract DNA from plant cells.", "subject": "Biology"},
        {"title": "Blood Groups and Compatibility", "description": "Understand blood group compatibility for transfusions.", "subject": "Biology"},
        {"title": "Nervous System Reflexes", "description": "Test human reflexes using simple experiments.", "subject": "Biology"},
        {"title": "Pythagoras Theorem Proof", "description": "Prove Pythagoras theorem using geometric visualization.", "subject": "Math"},
        {"title": "Statistics and Probability", "description": "Learn about probability distributions and statistical analysis.", "subject": "Math"},
        {"title": "Trigonometric Ratios", "description": "Explore the relationships between different trigonometric functions.", "subject": "Math"},
        {"title": "Graphing Quadratic Equations", "description": "Visualize quadratic equations using graphs.", "subject": "Math"},
        {"title": "Geometric Transformations", "description": "Study translations, rotations, and reflections in geometry.", "subject": "Math"},
        {"title": "Area and Volume of 3D Shapes", "description": "Calculate areas and volumes of different three-dimensional shapes.", "subject": "Math"},
        {"title": "Number Patterns and Sequences", "description": "Discover patterns in number sequences and series.", "subject": "Math"},
        {"title": "Calculating Pi using Circles", "description": "Understand the mathematical constant π using real-life experiments.", "subject": "Math"},
        {"title": "Fibonacci Sequence and Nature", "description": "Explore how the Fibonacci sequence appears in nature.", "subject": "Math"}
    ]

    for exp in experiments:
        title = exp["title"]
        description = exp["description"]
        subject = exp["subject"]
        embedding = embed_text(title + " " + description)  # Generate vector embedding

        cursor.execute("""
            INSERT INTO experiments (title, description, embedding, subject)
            VALUES (%s, %s, %s, %s)
            ON CONFLICT (title) DO NOTHING;
        """, (title, description, embedding, subject))

    conn.commit()
    cursor.close()
    conn.close()

    print("✅ All experiments inserted successfully!")

if __name__ == "__main__":
    insert_experiments()
