const ROVER_DATA = [ 
    { 
        'name': 'curiosity',
        'status': 'active',
        'max_sol': -1,
        'camera_data': [
            { 'name': 'FHAZ', 'full_name': 'Front Hazard Avoidance Camera' },
            { 'name': 'NAVCAM', 'full_name': 'Navigation Camera' },
            { 'name': 'MAST', 'full_name': 'Mast Camera' },
            { 'name': 'CHEMCAM', 'full_name': 'Chemistry and Camera Complex' },
            { 'name': 'MAHLI', 'full_name': 'Mars Hand Lens Imager' },
            { 'name': 'MARDI', 'full_name': 'Mars Descent Imager' },
            { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }
        ]
    },
    { 
        'name': 'opportunity',
        'status': 'complete',
        'max_sol': 5111, 
        'camera_data': [
            { 'name': 'FHAZ', 'full_name': 'Front Hazard Avoidance Camera' },
            { 'name': 'NAVCAM', 'full_name': 'Navigation Camera' },
            { 'name': 'PANCAM', 'full_name': 'Panoramic Camera' },
            { 'name': 'MINITES', 'full_name': 'Miniature Thermal Emission Spectrometer (Mini-TES)' },
            { 'name': 'ENTRY', 'full_name': 'Entry, Descent, and Landing Camera' },
            { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }
        ]
    },
    {
        'name': 'spirit',
        'status': 'complete',
        'max_sol': 2208,
        'camera_data': [
            { 'name': 'FHAZ', 'full_name': 'Front Hazard Avoidance Camera' },
            { 'name': 'NAVCAM', 'full_name': 'Navigation Camera' },
            { 'name': 'PANCAM', 'full_name': 'Panoramic Camera' },
            { 'name': 'MINITES', 'full_name': 'Miniature Thermal Emission Spectrometer (Mini-TES)' },
            { 'name': 'ENTRY', 'full_name': 'Entry, Descent, and Landing Camera' },
            { 'name': 'RHAZ', 'full_name': 'Rear Hazard Avoidance Camera' }
        ]
    }
];

module.exports = { ROVER_DATA };